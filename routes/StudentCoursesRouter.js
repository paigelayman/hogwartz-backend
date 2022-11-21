const router = require('express').Router()
const controller = require('../controllers/StudentCoursesController')

router.get('/', controller.getStudentCourses)

router.get('/:studentcourses_id', controller.getOneStudentCourse)

router.post('/new', controller.createStudentCourse)

module.exports = router
