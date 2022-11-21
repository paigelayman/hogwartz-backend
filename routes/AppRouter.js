const Router = require('express').Router()
const CourseRouter = require('./CourseRouter')
const GradesRouter = require('./GradesRouter')
const StudentRouter = require('./StudentRouter')

Router.use('/courses', CourseRouter)
Router.use('/grades', GradesRouter)
Router.use('/students', StudentRouter)

module.exports = Router
