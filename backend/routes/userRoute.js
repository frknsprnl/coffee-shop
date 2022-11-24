const express = require('express');
const userController = require('../controllers/UserController');

const router = express.Router();

router.route('/').post(userController.createUser);

module.exports = router;