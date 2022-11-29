const express = require("express");
const userController = require("../controllers/UserController");
const router = express.Router();
const auth = require("../middlewares/auth");

router.route("/signup").post(userController.createUser);
router.route("/login").post(userController.loginUser);
router.route("/getuser").get(auth, userController.getUser);
router.route("/changepassword").post(auth, userController.changePassword);
router.route("/changemail").post(auth, userController.changeMail);


module.exports = router;
