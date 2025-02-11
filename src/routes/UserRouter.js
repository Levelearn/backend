const express = require('express');
// @ts-ignore
const userController = require('../controllers/UserController');

const router = express.Router();

// Route for get all users
router.get('/user', userController.getAllUsers);

// Route for get user by id
router.get('/user/:id', userController.getUserById);

// Router for create user
router.post('/user', userController.createUser);

// Router for update user by id
router.put('/user/:id', userController.updateUser);

// Router for delete user by id
router.delete('/user/:id', userController.deleteUser);


// SPECIAL ROUTES

// Get Courses by User
router.get('/user/:id/courses', userController.getCoursesByUser);

// Get Badges by User
router.get('/user/:id/badges', userController.getBadgesByUser);

module.exports = router;
