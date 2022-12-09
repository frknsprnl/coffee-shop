const { count } = require("../models/Article");
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
  const { currentPage = 1, limit = 6 } = req.query;

  const articles = await Article.find()
    .limit(limit * 1)
    .skip((currentPage - 1) * limit)
    .exec();

  const articleCount = await Article.countDocuments();

  if (articles.length > 0) {
    res.status(200).json({
      status: "success",
      articles,
      articleLimit: limit,
      articleCount: articleCount,
      totalPages: Math.ceil(articleCount / limit),
      currentPage: currentPage,
    });
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
