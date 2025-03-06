const express = require('express');
// @ts-ignore
const UserBadgeController = require('../controllers/UserBadgeController');

const router = express.Router();

// Route for get all UserBadges
router.get('/userbadge', UserBadgeController.getAllUserBadges);

// Route for get UserBadge by id
router.get('/userbadge/:id', UserBadgeController.getUserBadgeById);

// Router for create UserBadge
router.post('/userbadge', UserBadgeController.createUserBadge);

// Router for update UserBadge by id
router.put('/userbadge/:id', UserBadgeController.updateUserBadge);

// Router for delete UserBadge by id
router.delete('/userbadge/:id', UserBadgeController.deleteUserBadge);


module.exports = router;
