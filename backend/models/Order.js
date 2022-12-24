const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  orders: [
    {
      products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
      total: { type: Number, required: true },
      date: { type: Date, default: Date.now },
    },
  ],
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
