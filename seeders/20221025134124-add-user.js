'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users', [
      {
        name: 'Pancarsio Rosales',
        email: 'pancarcio.123@gmail.com',
        password: '1267'
      },
      {
        name: 'Mariano Perfect',
        email: 'Mariano.123@gmail.com',
        password: '1267'
      },
      {
        name: 'Yosoy Mazo',
        email: 'Yosoy.123@gmail.com',
        password: '8765'
      },
      {
        name: 'Sinigu All',
        email: 'Sinigu.123@gmail.com',
        password: '0988'
      }], {});
  },

  async down(queryInterface, Sequelize) {
     await queryInterface.bulkDelete('users', null, {});
     
  }
};
