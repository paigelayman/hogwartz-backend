'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('grades', [
      {
        score: 4,
        letter: 'A',
        studentCourseId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 3,
        letter: 'B',
        studentCourseId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 3,
        letter: 'B',
        studentCourseId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('grades', null, {})
  }
}
