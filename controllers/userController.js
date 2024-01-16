const User = require("../models/User");

const register = async (_username, _password, _firstname) => {
    try {
        let data = await User.create({
            username: _username,
            password: _password,
            firstname: _firstname
        });
        if (data) {
            console.log(`${_firstname} registered successfully`);
        } else {
            console.log('Cannot register');
        }
    } catch (e) {
        console.log('Register conn error:', e);
    }
}

const login = async (_username, _password) => {
    try {
        let data = await User.findOne({
            username: _username,
            password: _password
        });
        if (data) {
            console.log(`${_username} logged in`);
        } else {
            console.log({ error: "Invalid credentials" });
        }
    } catch (e) {
        console.log('Login conn error:', e);
    }
}

const getAllusers = async () => {
    try {
        let data = await User.find({}, { firstname: 1 ,username:1});
        console.log(data); // Add this return statement
    } catch (e) {
        console.log('Error in getting all users:', e);
    }
}

const deleteUser = async (_username) => {
    try {
        let data = await User.deleteOne({ username: _username });
        if (data) {
            console.log(`${_username} deleted successfully`);
        } else {
            console.log(`Cannot delete ${_username}`);
        }
    } catch (e) {
        console.log('Error in deleting user:', e);
    }
}

const editUser = async (_firstname, _editvalue) => {
    try {
        let data = await User.updateOne({ firstname: _firstname }, { $set: { firstname: _editvalue } });
    } catch {
        console.log('cannot conn delete');
    }
}



module.exports = { register, login, getAllusers, deleteUser, editUser };
