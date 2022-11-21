const router = require('express').Router()
const controller = require('../controllers/GradesController')

router.get('/', controller.getGrades)

router.get('/:grade_id', controller.getOneGrade)

router.post('/new', controller.createGrade)

module.exports = router
