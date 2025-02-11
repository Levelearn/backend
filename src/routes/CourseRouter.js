const express = require('express');
// @ts-ignore
const courseController = require('../controllers/CourseController');

const router = express.Router();

// BASIC ROUTES

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



// SPECIAL ROUTES

// Router for get chapters from course
router.get('/course/:id/chapters', courseController.getChapterByCourse);

// Router for get users from course
router.get('/course/:id/users', courseController.getUsersByCourse);

// Router for get badges from course
router.get('/course/:id/badges', courseController.getBadgesByCourse);


module.exports = router;
