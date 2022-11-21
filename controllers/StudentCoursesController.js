const { StudentCourses } = require('../models')
const courses = require('../models/courses')

const getGradesInCourse = async (req, res) => {
  try {
    const studentGrades = await StudentCourses.findAll({
      include: [
        {
          model: Courses,
          as: 'student_courses',
          through: { attributes: [grade] }
        }
      ]
    })
    res.send(studentGrades)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getGradesInCourse
}
