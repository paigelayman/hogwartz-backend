'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('courses', [
      {
        name: 'Astronomy',
        grade: 3.3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Charms',
        grade: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dark Arts',
        grade: 2.9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Defense against the dark arts',
        grade: 3.1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Herbology',
        grade: 3.9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'History of Magic',
        grade: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Potions',
        grade: 3.5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Transfiguration',
        grade: 3.2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('courses', null, {})
  }
}
