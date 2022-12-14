const express = require("express");
const orderController = require("../controllers/OrderController");
const auth = require("../middlewares/auth");
const router = express.Router();

router.route("/setorder").post(auth, orderController.setOrder);
router.route("/getorders").get(auth, orderController.getOrders);
router.route("/getorder/:id").get(auth, orderController.getOrder);

module.exports = router;
