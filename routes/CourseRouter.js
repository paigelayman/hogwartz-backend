const router = require('express').Router()
const controller = require('../controllers/CourseController')

router.get('/', controller.getCourses)

router.get('/:courses_id', controller.getOneCourse)

router.post('/new', controller.createCourse)

module.exports = router
