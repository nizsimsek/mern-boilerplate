const express = require("express");
const authController = require("../controllers/authController.js");

var router = express.Router();

router.get("/", authController.checkAuth);
router.post("/login", authController.login);
router.post("/logout", authController.logout);

module.exports = router;
