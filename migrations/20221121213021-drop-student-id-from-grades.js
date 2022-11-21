'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.removeColumn('grades', 'studentId')
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.addColumn('grades', 'studentId', {
      type: Sequelize.INTEGER
    })
  }
}
