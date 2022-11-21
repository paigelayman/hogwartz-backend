'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'students',
      [
        {
          name: 'John',
          email: 'john@email.com',
          courses: 'Potions, History of Magic, Transfiguration',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Ben',
          email: 'Ben@email.com',
          courses: 'Potions, Dark Arts, Astronomy',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Chris',
          email: 'Chris@email.com',
          courses: 'Potions, Herbology, Charms',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('students', null, {})
  }
}
