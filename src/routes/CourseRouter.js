const express = require('express');
// @ts-ignore
const courseController = require('../controllers/CourseController');

const router = express.Router();

// Route for get all courses
router.get('/course', courseController.getAllCourses);

// Route for get course by id
router.get('/course/:id', courseController.getCourseById);

// Router for create course
router.post('/course', courseController.createCourse);

// Router for update course by id
router.put('/course/:id', courseController.updateCourse);

// Router for delete course by id
router.delete('/course/:id', courseController.deleteCourse);

module.exports = router;
