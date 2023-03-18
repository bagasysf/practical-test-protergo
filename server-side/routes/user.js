const express = require('express');
const userController = require('../controllers/userController');
const { authentication } = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');
const router = express.Router();

router.post('/login', userController.login);
router.use(authentication);
router.get('/', userController.fetchUser);
router.post('/register', authorization, userController.register);

module.exports = router;
