const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: Number,
        required: true,
    },
    firstname: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 15
    },
    age: {
        type: Number,
        minLength: 3,
    }
})

const User = mongoose.model('User',userSchema);

module.exports = User;