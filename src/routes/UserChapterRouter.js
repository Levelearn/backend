const express = require('express');
// @ts-ignore
const userChapterController = require('../controllers/UserChapterController');
const { uploadImage } = require('../middlewares/FileUpload');

const router = express.Router();


// Route for get all userchapters
router.get('/userchapter', userChapterController.getAllUserChapters);

// Route for get userchapter by id
router.get('/userchapter/:id', userChapterController.getUserChapterById);

// Router for create userchapter
router.post('/userchapter', userChapterController.createUserChapter);

// Router for update userchapter by id
router.put('/userchapter/:id', userChapterController.updateUserChapter);

// Router for delete userchapter by id
router.delete('/userchapter/:id', userChapterController.deleteUserChapter);


// SPECIAL ROUTES
router.get('/userchapter/:userId/:chapterId', userChapterController.getUserChapterByUserByChapter);

router.put('/userchapter/:userId/:chapterId', userChapterController.updateUserChapterByUserByChapter);



module.exports = router;
