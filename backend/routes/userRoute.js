const express = require("express");
const userController = require("../controllers/UserController");
const router = express.Router();
const auth = require("../middlewares/auth");

router.route("/signup").post(userController.createUser);
router.route("/login").post(userController.loginUser);
router.route("/getuser").get(auth, userController.getUser);

module.exports = router;
