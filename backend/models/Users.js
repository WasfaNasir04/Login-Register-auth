const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    role: {
        type: String,
        enum: ['User', 'Admin'], // Ensure only 'User' or 'Admin' can be selected
        default: 'User'
      }
    
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel