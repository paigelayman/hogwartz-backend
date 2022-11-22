const {
  Courses,
  Grades,
  Student,
  StudentCourses,
  sequelize
} = require('../models')

const getCourseAndGrade = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.theOne)
    const studentcourses = await StudentCourses.findAll({
      where: {
        studentId: `${req.params.theOne}`
      },
      raw: true,
      nest: true
    })
    const gradeScore = await Grades.findAll({
      attributes: ['score'],
      where: {
        studentCourseId: `${req.params.theOne}`
      },
      raw: true,
      nest: true
    })
    const grade = await Grades.findAll({
      where: {
        studentCourseId: `${req.params.theOne}`
      },
      raw: true,
      nest: true
    })
    const allCourses = await Courses.findAll()
    res.send({ student, studentcourses, grade, gradeScore, allCourses })
  } catch (error) {
    res.status(500).send({ status: 'Error', msg: 'get error' })
  }
}

module.exports = {
  getCourseAndGrade
}
