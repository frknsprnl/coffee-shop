const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");
const articleRoute = require("./routes/articleRoute");
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

//routes
app.use("/user", userRoute);
app.use("/blog", articleRoute);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
