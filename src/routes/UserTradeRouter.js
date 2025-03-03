const express = require('express');
// @ts-ignore
const UserTradeController = require('../controllers/UserTradeController');

const router = express.Router();

// Route for get all UserTrades
router.get('/usertrade', UserTradeController.getAllUserTrades);

// Route for get UserTrade by id
router.get('/usertrade/:id', UserTradeController.getUserTradeById);

// Router for create UserTrade
router.post('/usertrade', UserTradeController.createUserTrade);

// Router for update UserTrade by id
router.put('/usertrade/:id', UserTradeController.updateUserTrade);

// Router for delete UserTrade by id
router.delete('/usertrade/:id', UserTradeController.deleteUserTrade);

module.exports = router;
