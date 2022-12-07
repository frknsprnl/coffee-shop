const Article = require("../models/Article");

exports.createArticle = async (req, res) => {
  try {
    const article = await Article.create(req.body);
    res
      .status(201)
      .json({ status: "success", message: "İçerik oluşturuldu.", article });
  } catch (err) {
    res.status(400).json({ status: "fail", message: "İçerik oluşturulamadı." });
  }
};

exports.getArticles = async (req, res) => {
  const articles = await Article.find({});

  if (articles.length > 0) {
    res.status(200).json({ status: "success", articles });
  } else {
    res.status(400).json({ status: "fail", message: "İçerik bulunamadı." });
  }
};

exports.getArticle = async (req, res) => {
  const article = await Article.findById(req.params.id);

  if (article) {
    res.status(200).json({ status: "success", article });
  } else {
    res.status(400).json({ status: "fail", message: "İçerik bulunamadı." });
  }
};
