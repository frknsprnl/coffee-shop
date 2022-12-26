const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const cartController = require("../controllers/CartController");

router.route("/additem").post(auth, cartController.addToCart);
router.route('/removeitem').post(auth, cartController.removeFromCart);
router.route('/getitems').get(auth, cartController.getCart);
router.route('/removecart').post(auth, cartController.removeCart);

module.exports = router;
