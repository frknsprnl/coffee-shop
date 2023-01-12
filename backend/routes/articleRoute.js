const express = require("express");
const articleController = require("../controllers/ArticleController");
const auth = require('../middlewares/auth');
const router = express.Router();
const upload = require('../middlewares/upload');

router.route('/createarticle').post(upload.single('image'), articleController.createArticle);
router.route('/articles').get(articleController.getArticles);
router.route('/article/:id').get(articleController.getArticle);
router.route('/blogs').get(auth, articleController.getBlogs);
router.route('/deletearticle').post(auth, articleController.deleteArticle);

module.exports = router;
