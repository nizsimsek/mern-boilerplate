const UserModel = require("../models/UserModel.js");

const getAllUsers = async () => {
  const users = await UserModel.getAll();

  const data = !users ? [] : users;

  return { data };
};

const getUserById = async (id) => {
  const user = await UserModel.getById(id);

  if (user) {
    return { data: user, message: "User found" };
  } else {
    return { data: null, message: "User not found" };
  }
};

const createUser = async (user) => {
  const result = await UserModel.create(user);

  if (result) {
    return {
      message: "User created successfully",
    };
  } else {
    return {
      message: "User not created",
    };
  }
};

const updateUser = async (id, user) => {
  const result = await UserModel.update(id, user);

  if (result) {
    return {
      message: "User updated successfully",
    };
  } else {
    return {
      message: "User not updated",
    };
  }
};

const deleteUser = async (id) => {
  const result = await UserModel.delete(id);

  if (result) {
    return {
      message: "User deleted successfully",
    };
  } else {
    return {
      message: "User not deleted",
    };
  }
};

const findByEmail = async (email) => {
  const user = await UserModel.findByEmail(email);

  if (user) {
    return { data: user, message: "User found" };
  } else {
    return { data: null, message: "User not found" };
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  findByEmail,
};
