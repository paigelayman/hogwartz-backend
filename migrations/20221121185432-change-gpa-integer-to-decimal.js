'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.changeColumn('students', 'gpa', {
      type: Sequelize.DECIMAL
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.changeColumn('students', 'gpa', {
      type: Sequelize.INTEGER
    })
  }
}
