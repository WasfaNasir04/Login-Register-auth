const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const session = require("express-session");  //new
const MongoStore = require("connect-mongo");  //new
const EmployeeModel = require('./models/Employee');
const UserModel = require('./models/Users');

const app = express()
app.use(express.json())

//new   //app.use(cors)
app.use(cors({
    origin: "http://localhost:5173", // Vite default port
    credentials: true
}));

mongoose.connect("mongodb://localhost:27017/employee");

//user creation crud
app.post("/createuser", (req, res) =>{
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.get('/users', (req, res) =>{
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.get('/getUser/:id', (req,res) => {
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.put('/updateuser/:id', (req,res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id:id}, 
        {name : req.body.name, 
        email: req.body.email, 
        age: req.body.age})
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.delete('/deleteUser/:id', (req,res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

//new
// Setup session management
app.use(session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: "mongodb://localhost:27017/employee" }),
    cookie: { maxAge: 1000 * 60 * 60 * 24 } // 1-day session expiration
}));



//login route
app.post("/login", (req,res) =>{
    const {email,password} = req.body;
    EmployeeModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                req.session.user = user; // Save user in session (new)
                res.json({ status: "Success"});
            }else{
                res.json({ status: "The password is incorrect"});
            }
        }else{
            res.json({status : "No user existed"});
        }
    })
} )

//new
// Check session (to see if user is logged in)
app.get("/session", (req, res) => {
    if (req.session.user) {
        res.json({ loggedIn: true, user: req.session.user });
    } else {
        res.json({ loggedIn: false });
    }
});

//new
// Logout route
app.post("/logout", (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.json({ status: "Logout failed" });
        }
        res.clearCookie("connect.sid"); // Clear the session cookie
        res.json({ status: "Logout successful" });
    });
});

// Logout route
app.get('/logout', (req, res) => {
    res.clearCookie('session_token'); // Replace 'session_token' with the name of your cookie
    res.json({ status: "Logout successful" });
  });
  

//register
app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))

})

// New route to update user information
app.post('/updateProfile', (req, res) => {
    const { email, dateOfBirth, address, phoneNumber, department, position } = req.body;

    // Find the user by email and update the new fields
    EmployeeModel.findOneAndUpdate(
        { email: email }, 
        { dateOfBirth, address, phoneNumber, department, position }, 
        { new: true } // Return the updated document
    )
    .then(updatedUser => res.json({ status: "Profile updated", user: updatedUser }))
    .catch(err => res.json({ status: "Error updating profile", error: err }));
});



app.listen(3001, () => {
    console.log("server is running")
})