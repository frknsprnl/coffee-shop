const express = require('express');
const mailController = require('../controllers/MailController');
const router = express.Router();

router.route('/sendmail').post(mailController.sendMail);

module.exports = router;