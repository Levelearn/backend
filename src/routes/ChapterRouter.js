const express = require('express');
// @ts-ignore
const chapterController = require('../controllers/ChapterController');

const router = express.Router();

// Route for get all chapters
router.get('/chapter', chapterController.getAllChapters);

// Route for get chapter by id
router.get('/chapter/:id', chapterController.getChapterById);

// Router for create chapter
router.post('/chapter', chapterController.createChapter);

// Router for update chapter by id
router.put('/chapter/:id', chapterController.updateChapter);

// Router for delete chapter by id
router.delete('/chapter/:id', chapterController.deleteChapter);


// SPECIAL ROUTES

// Router for get material from chapter
router.get('/chapter/:id/materials', chapterController.getMaterialsByChapter);

// Router for get material from chapter
router.get('/chapter/:id/assessments', chapterController.getAssessmentsByChapter);

// Router for get material from chapter
router.get('/chapter/:id/assignments', chapterController.getAssignmentsByChapter);

// Router for get content from chapter
router.get('/chapter/:id/content', chapterController.getContentByChapter);

// Router for get userchapter from chapter
router.get('/chapter/:id/userchapter', chapterController.getUserChapterByChapterId);

module.exports = router;
