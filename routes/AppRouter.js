const Router = require('express').Router()
const CourseRouter = require('./CourseRouter')
const GradesRouter = require('./GradesRouter')
const StudentRouter = require('./StudentRouter')
const StudentCoursesRouter = require('./StudentCoursesRouter')

Router.use('/courses', CourseRouter)
Router.use('/grades', GradesRouter)
Router.use('/students', StudentRouter)
Router.use('/studentcourses', StudentCoursesRouter)

module.exports = Router
