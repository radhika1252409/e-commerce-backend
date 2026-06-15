const User = require("../models/userModel");

exports.createUser = (data) => User.create(data);

exports.getUsers = () => User.find();

exports.getUserById = (id) => User.findById(id);

exports.updateUser = (id, data) =>
    User.findByIdAndUpdate(id, data, { new: true });

exports.deleteUser = (id) =>
    User.findByIdAndDelete(id);
