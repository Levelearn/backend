const express = require('express');
// @ts-ignore
const tradeController = require('../controllers/TradeController');

const router = express.Router();

// Route for get all trades
router.get('/trade', tradeController.getAllTrades);

// Route for get trade by id
router.get('/trade/:id', tradeController.getTradeById);

// Router for create trade
router.post('/trade', tradeController.createTrade);

// Router for update trade by id
router.put('/trade/:id', tradeController.updateTrade);

// Router for delete trade by id
router.delete('/trade/:id', tradeController.deleteTrade);

module.exports = router;
