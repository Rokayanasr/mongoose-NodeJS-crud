const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    userId:{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    title:{
        type: String,
        required: true,
        minLength: 5,
        maxLength: 20
    },
    status:{
        type: String,
        optional: true,
        default: "to-do"
    },
    tag:{
        type: String,
        required: true,
        optional: true,
        maxLength: 10
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

const Todo = mongoose.model('todo', todoSchema);
Todo.createIndexes({ title: 1 });
module.exports = Todo;
