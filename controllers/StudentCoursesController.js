const { StudentCourses } = require('../models')
const courses = require('../models/courses')

// const getGradesInCourse = async (req, res) => {
//   try {
//     const studentGrades = await StudentCourses.findAll({
//       include: [
//         {
//           model: Courses,
//           as: 'student_courses',
//           through: { attributes: [grade] }
//         }
//       ]
//     })
//     res.send(studentGrades)
//   } catch (error) {
//     throw error
//   }
// }
const getStudentCourses = async (req, res) => {
  try {
    const studentCourse = await StudentCourses.findAll()
    res.send(studentCourse)
  } catch (error) {
    res.status(500).send({ status: 'Error', msg: 'get error' })
  }
}

const getOneStudentCourse = async (req, res) => {
  try {
    const studentCourse = await StudentCourses.findByPk(
      req.params.studentcourses_id
    )
    res.send(studentCourse)
  } catch (error) {
    res.status(500).send({ status: 'Error', msg: 'get one error' })
  }
}
const GetAllStudentCoursesWithPk = async (req, res) => {
	try {
		const studentCourses = await db.sequelize.query('SELECT * FROM student_courses',{
			type:db.sequelize.QueryTypes.SELECT
		})
		
		res.send(studentCour);
	} catch (error) {
		throw error;
	}
}

const createStudentCourse = async (req, res) => {
  try {
    let studentId = parseInt(req.params.student_id)
    let courseId = parseInt(req.params.course_id)
    let courseContent = {
      studentId,
      courseId,
      ...req.body
    }
    let studentCourse = await StudentCourses.create(courseContent)
    res.send(studentCourse)
  } catch (error) {
    res.status(500).send({ status: 'Error', msg: error.message })
  }
}

module.exports = {
  getStudentCourses,
  getOneStudentCourse,
  createStudentCourse,
  GetAllStudentCoursesWithPk
}
