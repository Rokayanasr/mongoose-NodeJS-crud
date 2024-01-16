//import mongo
const mongoose = require('mongoose');
const User = require('./models/User');
const Todo = require('./models/todo');

const userController = require('./controllers/userController');
const todoController = require('./controllers/todoController');
const { todo } = require('node:test');

//connect to mongoDb
const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/todoDB');
        console.log(`MongoDB Connected: {conn.connection.host}`);
    } catch (error) {
        console.error(error.message);
    }
}
connectDB()
// userController.register("rokaya_nasr",12345, "rokaya" )
// userController.register("doha_nasr",12345, "rokaya" )
// userController.register("mohamed_nasr",12345, "mohamed" )
// userController.register("alaa_nasr",12345, "alaa" )

// userController.login("rokaya_nasr",12345)
// userController.deleteUser("doha_nasr");

// userController.editUser("mohamed","moka")
// userController.getAllusers();

// todoController.createTodo("alaa_nasr","momomom","lolololo");
// todoController.editTodo("65a6a3ada09550f5b3c92621", "hello world", "fantastic");
todoController.todoDelete('65a6a3d9e430174abef24fc2')
// todoController.getTodo("alaa_nasr");
userController.getAllusers();
