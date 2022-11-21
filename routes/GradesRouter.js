const router = require('express').Router()
const controller = require('../controllers/GradesController')

router.get('/grades', controller.getGrades)

router.get('/grades/:grade_id', controller.getOneGrade)

router.post('/grades/new', controller.createGrade)

module.exports = router
