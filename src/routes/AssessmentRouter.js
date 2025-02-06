const express = require('express');
// @ts-ignore
const assessmentController = require('../controllers/AssessmentController');

const router = express.Router();

// Route for get all assessments
router.get('/assessment', assessmentController.getAllAssessments);

// Route for get assessment by id
router.get('/assessment/:id', assessmentController.getAssessmentById);

// Router for create assessment
router.post('/assessment', assessmentController.createAssessment);

// Router for update assessment by id
router.put('/assessment/:id', assessmentController.updateAssessment);

// Router for delete assessment by id
router.delete('/assessment/:id', assessmentController.deleteAssessment);

module.exports = router;
