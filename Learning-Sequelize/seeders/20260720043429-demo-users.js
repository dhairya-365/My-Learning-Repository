'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'newusers',
      [{
        name: 'Rohit sharma'
      }], {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('newusers', null, {})
  }
};
