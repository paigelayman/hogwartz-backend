'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class StudentCourses extends Model {
    static associate(models) {}
  }
  StudentCourses.init(
    {
      studentId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'students',
          key: 'id'
        }
      },
      courseId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'courses',
          key: 'id'
        }
      },
      score: { type: DataTypes.INTEGER },
      letter: { type: DataTypes.STRING }
    },
    {
      sequelize,
      modelName: 'StudentCourses',
      tableName: 'student_courses'
    }
  )
  return StudentCourses
}
