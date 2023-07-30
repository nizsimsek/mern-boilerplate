const RoleModel = require("../models/RoleModel");

const isSuper = async (req, res, next) => {
  let user = req?.session?.user;

  if (!user) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  let role = await RoleModel.getById(user.role_id);

  if (role.name != "super") {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  next();
};

module.exports = { isSuper };
