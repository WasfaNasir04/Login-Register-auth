const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    role: {
        type: String,
        enum: ['admin', 'user'], // Limits the role to these two options
        default: 'user' // Sets a default role
    }
    
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel