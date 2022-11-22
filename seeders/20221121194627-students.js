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
        },
        {
          name: 'Harry',
          email: 'harry@email.com',
          courses: 'Charms, Dark Arts, Transfiguration',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Ron',
          email: 'ron@email.com',
          courses: 'Dark Arts, History of Magic, Herbology',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Hermione',
          email: 'hermione@email.com',
          courses: 'Herbology, Transfiguration, Charms',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Dean',
          email: 'dean@email.com',
          courses: 'Potions, History of Magic, Transfiguration',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Fred',
          email: 'fred@email.com',
          courses: 'Potions, Dark Arts, Astronomy',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'George',
          email: 'george@email.com',
          courses: 'Potions, Herbology, Charms',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Ginny',
          email: 'ginny@email.com',
          courses: 'Charms, Dark Arts, Transfiguration',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Draco',
          email: 'draco@email.com',
          courses: 'Dark Arts, History of Magic, Herbology',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Luna',
          email: 'luna@email.com',
          courses: 'Herbology, Transfiguration, Charms',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Neville',
          email: 'neville@email.com',
          courses: 'Herbology, Transfiguration, Charms',
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
