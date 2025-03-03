const tradeService = require('../services/TradeService');

// Controller untuk mendapatkan daftar trade
const getAllTrades = async (req, res) => {
    try {
        const trades = await tradeService.getAllTrades();
        res.status(200).json(trades);
        console.log(`getAllTrades successfully requested`);
    } catch (error) {
        res.status(500).json({ message: "Failed to get trades", detail: error.message });
        console.log(error.mesage);
    }
};

// Controller untuk mendapatkan trade by id
const getTradeById = async(req, res) => {
    const id = parseInt(req.params.id);

    try {
        const trade = await tradeService.getTradeById(id);
        res.status(200).json(trade);
    } catch (error) {
        res.status(500).json({ message: `Failed to get trade with id ${ id }`})
        console.log(error.mesage);
        
    }
}

// Controller untuk membuat trade baru
const createTrade = async (req, res) => {
    try {
        const newData = req.body;

        const trade = await tradeService.createTrade(newData);
        res.status(201).json({message: `Successfully create new trade ${newData.name}`, trade: trade});
    } catch (error) {
        res.status(500).json({ message: "Failed to create new trade", data: error.message });
        console.log(error.message);
        
    }
};

// Controller untuk update trade by id
const updateTrade = async (req, res) => {
    const id = parseInt(req.params.id);

    const updateData = req.body;

    try {
        const updateTrade = await tradeService.updateTrade(id, updateData);
        res.status(200).json({message: "Successfully updated trade", trade: updateTrade});
    } catch (error) {
        res.status(500).json({ message: "Failed to update trade", detail: error.message });
        console.log(error.message);
        
    }
};

// Controller untuk delete trade by id
const deleteTrade = async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        const deleteTrade = await tradeService.deleteTrade(id);
        res.status(200).json(deleteTrade);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create trade' });
        console.log(error.message);
        
    }
};

module.exports = {
    getAllTrades,
    getTradeById,
    createTrade,
    updateTrade,
    deleteTrade
};
