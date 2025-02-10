const UserBadgeService = require('../services/UserBadgeService');

// Controller untuk mendapatkan daftar UserBadge
const getAllUserBadges = async (req, res) => {
    try {
        const UserBadges = await UserBadgeService.getAllUserBadges();
        res.status(200).json(UserBadges);
        console.log(`getAllUserBadges successfully requested`);
    } catch (error) {
        res.status(500).json({ message: "Failed to get UserBadges", detail: error.message });
        console.log(error.mesage);
    }
};

// Controller untuk mendapatkan UserBadge by id
const getUserBadgeById = async(req, res) => {
    const id = parseInt(req.params.id);

    try {
        const UserBadge = await UserBadgeService.getUserBadgeById(id);
        res.status(200).json(UserBadge);
    } catch (error) {
        res.status(500).json({ message: `Failed to get UserBadge with id ${ id }`})
        console.log(error.mesage);
        
    }
}

// Controller untuk membuat UserBadge baru
const createUserBadge = async (req, res) => {
    try {
        const newData = req.body;

        const UserBadge = await UserBadgeService.createUserBadge(newData);
        res.status(201).json({message: `Successfully create new UserBadge ${newData.name}`, UserBadge: UserBadge});
    } catch (error) {
        res.status(500).json({ message: "Failed to create new UserBadge", data: error.message });
        console.log(error.message);
        
    }
};

// Controller untuk update UserBadge by id
const updateUserBadge = async (req, res) => {
    const id = parseInt(req.params.id);

    const updateData = req.body;

    try {
        const updateUserBadge = await UserBadgeService.updateUserBadge(id, updateData);
        res.status(200).json({message: "Successfully updated UserBadge", UserBadge: updateUserBadge});
    } catch (error) {
        res.status(500).json({ message: "Failed to update UserBadge", detail: error.message });
        console.log(error.message);
        
    }
};

// Controller untuk delete UserBadge by id
const deleteUserBadge = async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        const deleteUserBadge = await UserBadgeService.deleteUserBadge(id);
        res.status(200).json(deleteUserBadge);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create UserBadge' });
        console.log(error.message);
        
    }
};

module.exports = {
    getAllUserBadges,
    getUserBadgeById,
    createUserBadge,
    updateUserBadge,
    deleteUserBadge
};
