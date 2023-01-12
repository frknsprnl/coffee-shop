const express = require('express');
const productController = require('../controllers/ProductController');
const auth = require('../middlewares/auth');
const upload = require('../middlewares/upload');
const router = express.Router();

router.route('/createproduct').post(auth, upload.single('productImage'), productController.createProduct);
router.route('/getproducts').get(productController.getProducts);
router.route('/deleteproduct').post(auth, productController.deleteProduct);

module.exports = router;