'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    static associate(models) {
      Courses.belongsToMany(models.Student, {
        as: 'course',
        through: models.StudentCourses,
        foreighKey: 'courseId'
      })
    }
  }
  Courses.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      grade: DataTypes.INTEGER,
      studentId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Courses',
      tableName: 'courses'
    }
  )
  return Courses
}
