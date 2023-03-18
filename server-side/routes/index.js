const express = require('express');
const { authentication } = require('../middlewares/authentication');
const router = express.Router();
const userRouter = require('./user');
const itemRouter = require('./item');

router.use('/users', userRouter);
router.use(authentication);
router.use('/items', itemRouter);

module.exports = router;
