'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.removeColumn('students', 'gpa')
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.addColumn('students', 'gpa', {
      type: Sequelize.DECIMAL
    })
  }
}
