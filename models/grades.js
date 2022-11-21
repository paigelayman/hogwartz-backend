'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Grades extends Model {
    static associate(models) {
      Grades.belongsTo(models.Student, { foreignKey: 'studentId' })
      Grades.belongsTo(models.Courses, { foreignKey: 'courseId' })
    }
  }
  Grades.init(
    {
      score: {
        type: DataTypes.INTEGER
      },
      courseId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        References: {
          model: 'students',
          key: 'id'
        }
      },
      studentId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        References: {
          model: 'students',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Grades',
      tableName: 'grades'
    }
  )
  return Grades
}
