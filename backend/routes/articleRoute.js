const express = require("express");
const articleController = require("../controllers/ArticleController");
const router = express.Router();
const upload = require('../middlewares/upload');

router.route('/createarticle').post(upload.single('image'), articleController.createArticle);
router.route('/articles').get(articleController.getArticles);
router.route('/article/:id').get(articleController.getArticle);

module.exports = router;
