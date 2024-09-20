// const mongoose = require('mongoose')

// const EmployeeSchema = new mongoose.Schema({
//     name :String,
//     email: String,
//     password: String
// })

// const EmployeeModel = mongoose.model("employees", EmployeeSchema)
// module.exports = EmployeeModel

const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    dateOfBirth: Date,  // New field
    address: String,    // New field
    phoneNumber: String // New field (optional)
})

const EmployeeModel = mongoose.model("employees", EmployeeSchema)
module.exports = EmployeeModel
