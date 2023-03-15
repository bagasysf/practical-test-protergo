const express = require('express');
const adminController = require('../controllers/adminController');
const { authentication } = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');
const router = express.Router();

router.post('/login', adminController.login);
router.use(authentication);
router.post('/register', authorization, adminController.register);

module.exports = router;
