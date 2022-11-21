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
      letter: {
        type: DataTypes.STRING
      },
      studentCourseId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        References: {
          model: 'studentcourses',
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
