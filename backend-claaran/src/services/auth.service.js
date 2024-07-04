const { genSaltSync, hashSync } = require("bcrypt");
const UserModel = require("../models/User");


function registerUser(newUser) {
    
    const dbUser = new UserModel(newUser);

    const salt = genSaltSync();
    dbUser.password = hashSync (newUser.password, salt);

    dbUser.save();

}

async function findUserByUsername(username) {
    return await UserModel.findOne({username}, {

        createdAt: 0,
        updatedAt: 0,
        __v: 0
    });
}

async function getOneUserById(id) {
    return await UserModel.findById(id)
}

module.exports = {
    registerUser,
    findUserByUsername,
    getOneUserById
}