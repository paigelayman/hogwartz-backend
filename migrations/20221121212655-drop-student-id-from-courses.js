'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.removeColumn('courses', 'studentId')
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.addColumn('courses', 'studentId', {
      type: Sequelize.INTEGER
    })
  }
}
