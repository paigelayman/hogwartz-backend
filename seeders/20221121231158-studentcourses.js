'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('student_courses', [
      {
        studentId: 1,
        courseId: 1,
        letter: 'A',
        score: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 2,
        courseId: 5,
        letter: 'A',
        score: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 3,
        courseId: 3,
        letter: 'B',
        score: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 4,
        courseId: 2,
        letter: 'A',
        score: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 5,
        courseId: 4,
        letter: 'C',
        score: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 6,
        courseId: 2,
        letter: 'B',
        score: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 7,
        courseId: 5,
        letter: 'A',
        score: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 8,
        courseId: 3,
        letter: 'C',
        score: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 9,
        courseId: 7,
        letter: 'B',
        score: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 10,
        courseId: 2,
        letter: 'B',
        score: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 11,
        courseId: 5,
        letter: 'F',
        score: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 12,
        courseId: 3,
        letter: 'D',
        score: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        studentId: 13,
        courseId: 6,
        letter: 'B',
        score: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('student_courses', null, {})
  }
}
