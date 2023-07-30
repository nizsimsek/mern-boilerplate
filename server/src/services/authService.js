const userModel = require("../models/userModel");
const hashData = require("../utils/hashData");

const login = async (email, password) => {
  const user = await userModel.findByEmail(email);

  if (!user) {
    return { status: "error", message: "Invalid email or password" };
  }
  const isMatch = (await hashData(password)) === user.password;
  if (!isMatch) {
    return { status: "error", message: "Invalid email or password" };
  }

  return { status: "success", message: "Login success", data: user };
};

module.exports = { login };
