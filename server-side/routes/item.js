const express = require('express');
const itemController = require('../controllers/itemController');
const authorization = require('../middlewares/authorization');
const router = express.Router();

router.get('/', itemController.getItem);
router.post('/add', authorization, itemController.addItem);
router.get('/:id', itemController.getItemById);
router.put('/:id', authorization, itemController.updateItem);
router.delete('/:id', authorization, itemController.destroyItem);

module.exports = router;
