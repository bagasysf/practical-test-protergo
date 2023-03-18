const { Item } = require('../models/index');

class itemController {
  static async getItem(req, res, next) {
    try {
      const items = await Item.findAll();
      res.status(200).json({
        items,
      });
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  }

  static async getItemById(req, res, next) {
    try {
      const { id } = req.params;
      const item = await Item.findByPk(id);
      if (!item) {
        throw {
          name: 'ItemNotFound',
        };
      }
      res.status(200).json({
        item,
      });
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  }

  static async addItem(req, res, next) {
    try {
      const { name, description, quantity } = req.body;
      const postItem = await Item.create({
        name,
        description,
        quantity,
      });
      res.status(201).json({
        message: `Success add item with name ${postItem.name}`,
      });
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  }

  static async updateItem(req, res, next) {
    try {
      const { id } = req.params;
      const { name, description, quantity } = req.body;
      const item = await Item.findByPk(id);
      if (!item) {
        throw {
          name: 'ItemNotFound',
        };
      }
      await Item.update(
        {
          name,
          description,
          quantity,
        },
        {
          where: {
            id: item.id,
          },
        }
      );
      res.status(200).json({
        message: `Success update item with id ${item.id}`,
      });
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  }

  static async destroyItem(req, res, next) {
    try {
      const { id } = req.params;
      const item = await Item.findByPk(id);
      if (!item) {
        throw {
          name: 'ItemNotFound',
        };
      }
      await Item.destroy({
        where: {
          id: item.id,
        },
      });
      res.status(200).json({
        message: `Success destory item with id ${item.id}`,
      });
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  }
}

module.exports = itemController;
