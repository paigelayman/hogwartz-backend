'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.changeColumn('students', 'courses', {
      type: Sequelize.STRING
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.changeColumn('students', 'courses', {
      type: Sequelize.STRING
    })
  }
}
