const { error } = require("console");
const todo = require("../models/todo");
const User = require("../models/User")
const createTodo = async (_username, _title, _tag) => {
    try {
        let findUser = await User.findOne({ username: _username }, { _id: 1 })
        let data = await todo.create({
            userId: findUser,
            title: _title,
            tag: _tag
        })
        if (data) {
            console.log(`the todo you created is ${data}`);
        } else {
            console.log("error in todo list");
        }
    } catch (error) {
        console.error("Error in connecting or creating todo:", error.message);
    }
}

const getTodo = async (_username) => {
    try {
        let findUser = await User.findOne({ username: _username }, { _id: 1 })
        let data = await todo.find({ userId: findUser }, { title: 1, tag: 1, _id: 0 })
        if (data) {
            console.log(data);
        } else {
            console.log("cannot get the data");
        }
    } catch {
        console.log("error in getting todo");
    }
}

const editTodo = async (id, _title, _tag) => {
    try {
        user_id = id
        let data = await todo.findByIdAndUpdate(user_id,{ title: _title, tag: _tag })
        if (data) {
            console.log(data);
        } else {
            console.log("error in editing", error.message);
        }
    } catch {
        console.error("Error editing todo:", error.message);
    }
}

const todoDelete = async (id) => {
    try{
        let data = await todo.deleteOne({_id:id})
        if(data){
            console.log('deleted successfully',data);
        }else{
            console.log("can't delete");
        }
    }catch{
        console.log("can't connect to the delete",error.message);
    }
}
module.exports = { createTodo, getTodo, editTodo, todoDelete };