const router = require('express').Router()
const controller = require('../controllers/CourseController')

router.get('/', controller.getCourses)

router.get('/courses/:courses_id', controller.getOneCourse)

router.post('/courses/new', controller.createCourse)

module.exports = router
