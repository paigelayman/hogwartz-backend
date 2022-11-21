const { Courses, Grades, Student } = require('../models')

const getCourses = async (req, res) => {
  try {
    const courses = await Courses.findAll()
    res.send(courses)
  } catch (error) {
    res.status(500).send({ status: 'Error', msg: error.message })
  }
}

const getOneCourse = async (req, res) => {
  try {
    const courses = await Courses.findByPk(req.params.courses_id)
    res.send(courses)
  } catch (error) {
    res.status(500).send({ status: 'Error', msg: error.message })
  }
}
const createCourse = async (req, res) => {
  try {
    const courses = await Courses.create({ ...req.body })
    res.send(courses)
  } catch {
    res.status(500).send({ status: 'Error', msg: error.message })
  }
}

module.exports = {
  getCourses,
  getOneCourse,
  createCourse
}
