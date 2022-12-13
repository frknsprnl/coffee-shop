const express = require('express');
const productController = require('../controllers/ProductController');
const upload = require('../middlewares/upload');
const router = express.Router();

router.route('/createproduct').post(upload.single('productImage'), productController.createProduct);
router.route('/getproducts').get(productController.getProducts);

module.exports = router;