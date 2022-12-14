const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");
const articleRoute = require("./routes/articleRoute");
const mailRoute = require("./routes/mailRoute");
const productRoute = require("./routes/productRoute");
const cartRoute = require("./routes/cartRoute");
const orderRoute = require("./routes/orderRoute");
const cors = require("cors");

require("dotenv").config();

const app = express();

const mongoURL = `${process.env.DB_URL}`;

mongoose.connect(mongoURL, () => {
  console.log("db connected successfully.");
});

//middlewares
app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static("uploads"));

//routes
app.use("/user", userRoute);
app.use("/blog", articleRoute);
app.use("/mail", mailRoute);
app.use("/product", productRoute);
app.use("/cart", cartRoute);
app.use("/orders", orderRoute);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
