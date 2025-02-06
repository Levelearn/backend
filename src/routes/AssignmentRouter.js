const express = require('express');
// @ts-ignore
const assignmentController = require('../controllers/AssignmentController');

const router = express.Router();

// Route for get all assignments
router.get('/assignment', assignmentController.getAllAssignments);

// Route for get assignment by id
router.get('/assignment/:id', assignmentController.getAssignmentById);

// Router for create assignment
router.post('/assignment', assignmentController.createAssignment);

// Router for update assignment by id
router.put('/assignment/:id', assignmentController.updateAssignment);

// Router for delete assignment by id
router.delete('/assignment/:id', assignmentController.deleteAssignment);

module.exports = router;
