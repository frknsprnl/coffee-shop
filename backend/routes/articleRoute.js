const express = require("express");
const articleController = require("../controllers/ArticleController");
const router = express.Router();

router.route('/createarticle').post(articleController.createArticle);
router.route('/articles').get(articleController.getArticles);
router.route('/article/:id').get(articleController.getArticle);

module.exports = router;
