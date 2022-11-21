const { Courses, Grades, Student } = require('../models')

const getStudent = async (req, res) => {
  try {
    const student = await Student.findAll()
    res.send(student)
  } catch (error) {
    res.status(500).send({ status: 'Error', msg: error.message })
  }
}

const getOneStudent = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.student_id)
    res.send(student)
  } catch (error) {
    res.status(500).send({ status: 'Error', msg: error.message })
  }
}
const createStudent = async (req, res) => {
  try {
    const student = await Student.create({ ...req.body })
    res.send(student)
  } catch (error) {
    res.status(500).send({ status: 'Error', msg: error.message })
  }
}

module.exports = {
  getStudent,
  getOneStudent,
  createStudent
}
