const express = require('express');
const { authentication } = require('../middlewares/authentication');
const router = express.Router();
const userRouter = require('../routes/user');
const itemRouter = require('../routes/item');
const adminRouter = require('../routes/admin');

router.use('/users', userRouter);
router.use('/admins', adminRouter);
router.use(authentication);
router.use('/items', itemRouter);

module.exports = router;
