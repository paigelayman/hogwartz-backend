const router = require('express').Router()
const controller = require('../controllers/StudentCoursesController')

router.get('/getall/:student_id', controller.GetAllStudentCoursesWithPk)

router.get('/', controller.getStudentCourses)

router.get('/:studentcourses_id', controller.getOneStudentCourse)

router.post('/new', controller.createStudentCourse)

router.put('/update/:studentcourses_id', controller.updateStudentCourse)

module.exports = router
