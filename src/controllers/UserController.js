// @ts-ignore
const userService = require('../services/UserService');

// Controller untuk mendapatkan daftar user
const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers(); // Memanggil service
        res.status(200).json(users); // Mengirimkan response ke client
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Controller untuk mendapatkan user by id
const getUserById = async(req, res) => {
    const userId = parseInt(req.params.id);

    try {
        const user = await userService.getUserById(userId);
        
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: `Failed to get user with id ${ userId }`, details: error.message})
        console.log(error.message);
    }
}

// Controller untuk membuat user baru
const createUser = async (req, res) => {
    const { name,
            username, 
            password,
            user_role,
            student_id,
            student_point,
            student_course,
            student_badge,
            instructor_id,
            instructor_course
        } = req.body;
    try {
        const newUser = await userService.createUser(
            name,
            username, 
            password,
            user_role,
            student_id,
            student_point,
            student_course,
            student_badge,
            instructor_id,
            instructor_course);

        const respoonse = {
            message: `Successfully registered user ${name} as ${user_role}`,
            user: newUser
        }
        res.status(200).json(respoonse);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create user', details: error.message});
        console.log(error.message);
    }
};

// Controller untuk update user by id
const updateUser = async (req, res) => {
    const userId = parseInt(req.params.id);
    const { name,
            username, 
            password,
            user_role,
            student_id,
            student_point,
            student_course,
            student_badge,
            instructor_id,
            instructor_course } = req.body;

    if (!username && !password) {
        return res.status(400).json({ message: 'At least one field (username or password) is required' });
    }

    const updateData = {};
    if (username) updateData.username = username;
    if (password) updateData.password = password;

    try {
        const updateUser = await userService.updateUser(userId, updateData);
        
        res.status(200).json({message: `Successfully updated ${name}'s data`, user: updateUser});
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error.message);
    }
};

// Controller untuk delete user by id
const deleteUser = async (req, res) => {
    const userId = parseInt(req.params.id);

    try {
        const deleteUser = await userService.deleteUser(userId);
        res.status(200).json(deleteUser);
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete user' });
        console.log(error.message);
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
