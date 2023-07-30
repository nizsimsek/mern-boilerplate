const authService = require("../services/authService");

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const result = await authService.login(email, password);

  if (result.status == false) {
    req.session.user = null;
    res.status(401).json(result);
  } else {
    req.session.user = result.data;
    res.status(200).json(result);
  }
};

const logout = async (req, res, next) => {
  req.session.user = null;
  res.status(200).json({ status: "success", message: "Logged out" });
};

const checkAuth = async (req, res, next) => {
  if (req.session.user) {
    res.status(200).json({
      status: "success",
      message: "Authorized",
      data: req.session.user,
    });
  } else {
    res.status(200).json({ status: "error", message: "Unauthorized" });
  }
};

module.exports = { login, logout, checkAuth };
