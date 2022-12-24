const Order = require("../models/Order");

exports.setOrder = async (req, res) => {
  try {
    const { user_id } = req.user;
    const { products, total } = req.body;

    const userOrders = await Order.findOne({ user: user_id });

    if (userOrders) {
      userOrders.orders.push({ products, total });
      await userOrders.save();
    } else {
      await Order.create({
        user: user_id,
        orders: [{ products, total }],
      });
    }
    res
      .status(201)
      .json({ status: "success", message: "Sipariş oluşturuldu." });
  } catch (err) {
    res
      .status(500)
      .json({ status: "fail", message: "Sipariş oluşturulamadı.", error: err });
  }
};

exports.getOrders = async (req, res) => {
  const { user_id } = req.user;
  const orders = await Order.find({ user: user_id });

  if (orders) {
    res.status(200).json({ status: "success", orders });
  } else {
    res.status(404).json({ status: "fail", message: "Siparişler bulunamadı." });
  }
};
