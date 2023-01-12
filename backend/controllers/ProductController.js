const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
  try {
    const { name, price } = req.body;
    const image = req.file.filename;
    const product = await Product.create({
      name: name,
      productImage: image,
      price: price,
    });

    res
      .status(201)
      .json({ status: "success", message: "Ürün oluşturuldu." });
  } catch (err) {
    res
      .status(400)
      .json({ status: "fail", message: "Ürün oluşturulamadı.", error: err });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find({});

    res.status(200).json({ status: "success", products });
  } catch (err) {
    res
      .status(400)
      .json({ status: "fail", message: "Ürünler bulunamadı.", error: err });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({
      _id: req.body.product_id,
    });

    if (product) {
      res.status(200).json({ status: "success", message: "Ürün silindi" });
    } else {
      res.status(400).json({ status: "fail", message: "Ürün bulunamadı." });
    }
  } catch (err) {
    res
      .status(400)
      .json({ status: "fail", message: "Ürün silinemedi.", error: err });
  }
};
