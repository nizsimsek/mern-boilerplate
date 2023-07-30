const isAuth = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.status(401).json({ status: "error", message: "Unauthorized" });
  }
};

module.exports = { isAuth };
