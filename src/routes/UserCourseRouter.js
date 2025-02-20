const express = require('express');
// @ts-ignore
const userCourseController = require('../controllers/UserCourseController');

const router = express.Router();

// Route for get all usercourses
router.get('/usercourse', userCourseController.getAllUserCourses);

// Route for get usercourse by id
router.get('/usercourse/:id', userCourseController.getUserCourseById);

// Router for create usercourse
router.post('/usercourse', userCourseController.createUserCourse);

// Router for update usercourse by id
router.put('/usercourse/:id', userCourseController.updateUserCourse);

// Router for delete usercourse by id
router.delete('/usercourse/:id', userCourseController.deleteUserCourse);


// SPECIAL ROUTER

router.get('/usercourse/:userId/:courseId', userCourseController.getUserCourseByUserByCourse);

module.exports = router;
