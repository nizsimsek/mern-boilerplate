const express = require("express");
const userController = require("../controllers/userController.js");
const { isSuper } = require("../middlewares/isSuperMiddleware.js");

var router = express.Router();

router.get("/", userController.getAllUsers);

router.get("/:id", userController.getUserById);

router.post("/", isSuper, userController.createUser);

router.put("/:id", isSuper, userController.updateUser);

router.delete("/:id", isSuper, userController.deleteUser);

router.get("/find/:email", userController.getUserByEmail);

module.exports = router;
