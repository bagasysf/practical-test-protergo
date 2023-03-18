'use strict';

const { hash } = require('../helpers/bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const users = require('../datas/users.json').map((user) => {
      user.password = hash(user.password);
      user.createdAt = new Date();
      user.updatedAt = new Date();
      return user;
    });
    const items = require('../datas/items.json').map((item) => {
      item.createdAt = new Date();
      item.updatedAt = new Date();
      return item;
    });
    await queryInterface.bulkInsert('Users', users, {});
    await queryInterface.bulkInsert('Items', items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Items', null, {});
  },
};
