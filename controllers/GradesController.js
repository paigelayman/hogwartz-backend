const { Courses, Grades, Student } = require('../models')

const getGrades = async (req, res) => {
  try {
    const grades = await Grades.findAll()
    res.send(grades)
  } catch (error) {
    res.status(500).send({ status: 'Error', msg: error.message })
  }
}

const getOneGrade = async (req, res) => {
  try {
    const grades = await Grades.findByPk(req.params.grades_id)
    res.send(grades)
  } catch (error) {
    res.status(500).send({ status: 'Error', msg: error.message })
  }
}
const createGrade = async (req, res) => {
  try {
    const grades = await Grades.create({ ...req.body })
    res.send(grades)
  } catch {
    res.status(500).send({ status: 'Error', msg: error.message })
  }
}

module.exports = {
  getGrades,
  getOneGrade,
  createGrade
}
