const { Courses, Grades, Student } = require('../models')

const getStudent = async (req, res) => {
  try {
    const student = await Student.findAll()
    res.send(student)
  } catch (error) {
    res.status(500).send({ status: 'Error', msg: 'get error' })
  }
}

const getOneStudent = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.student_id)
    res.send(student)
  } catch (error) {
    res.status(500).send({ status: 'Error', msg: 'get one error' })
  }
}
const createStudent = async (req, res) => {
  try {
    const student = await Student.create({ ...req.body })
    res.send(student)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getStudent,
  getOneStudent,
  createStudent
}
