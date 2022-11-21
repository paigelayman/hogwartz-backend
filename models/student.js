'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    static associate(models) {
      Student.belongsToMany(models.Courses, {
        as: 'members',
        through: models.StudentCourses,
        foreignKey: 'studentId'
      })
    }
  }
  Student.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      courses: DataTypes.STRING,
      gpa: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Student'
    }
  )
  return Student
}
