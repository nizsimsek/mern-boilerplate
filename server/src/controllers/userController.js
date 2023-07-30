const userService = require("../services/userService");
const UserModel = require("../models/userModel");

const getAllUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();

    res.status(200).json(users);
  } catch (error) {
    console.log("UserController getAllUsers Error : ", error.message);
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(id);

    res.status(200).json(user);
  } catch (error) {
    console.log("UserController getUserById Error : ", error.message);
    next(error);
  }
};

const createUser = async (req, res, next) => {
  try {
    const user = req.body;
    const result = await userService.createUser(user);

    res.status(201).json(result);
  } catch (error) {
    console.log("UserController createUser Error : ", error.message);
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = req.body;
    const result = await userService.updateUser(id, user);

    res.status(200).json(result);
  } catch (error) {
    console.log("UserController updateUser Error : ", error.message);
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await userService.deleteUser(id);

    res.status(200).json(result);
  } catch (error) {
    console.log("UserController deleteUser Error : ", error.message);
    next(error);
  }
};

const getUserByEmail = async (req, res, next) => {
  try {
    const { email } = req.params;
    const user = await userService.findByEmail(email);

    res.status(200).json(user);
  } catch (error) {
    console.log("UserController findByEmail Error : ", error.message);
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getUserByEmail,
};
