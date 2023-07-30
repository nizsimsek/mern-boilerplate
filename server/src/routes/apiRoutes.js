const express = require("express");

const usersRouter = require("./userRoutes.js");
const authRouter = require("./authRoutes.js");

const { isAuth } = require("../middlewares/authMiddleware.js");

const apiRouter = express.Router();

apiRouter.use("/auth", authRouter);
apiRouter.use("/users", isAuth, usersRouter);

module.exports = { apiRouter };
