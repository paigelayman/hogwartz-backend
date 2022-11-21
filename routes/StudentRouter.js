const router = require('express').Router()
const controller = require('../controllers/StudentController')

router.get('/students', controller.getStudent)

router.get('/students/:student_id', controller.getOneStudent)

router.post('/students/new', controller.createStudent)

module.exports = router
