const router = require('express').Router()
const controller = require('../controllers/StudentController')

router.get('/', controller.getStudent)

router.get('/students/:student_id', controller.getOneStudent)

router.post('/new', controller.createStudent)

module.exports = router
