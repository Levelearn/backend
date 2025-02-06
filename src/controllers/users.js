const getAllUsers = (req, res) => {
    const data = {
        id: '1',
        name: "Archico",
        email: "archico@del.ac.id",
        address: "Los Angeles"
    }
    res.json({
        message: 'GET all users success',
        data: data
    })
}

const createNewUser = (req, res) => {
    console.log(req.body);
    res.json({
        message: 'CREATE new users success',
        data: req.body
    })
}

const updateUser = (req, res) => {
    const {idUser} = req.params;
    console.log('idUser: ', idUser);
    res.json({
        message: 'UPDATE user success',
        data: req.body,
    })
}

const deleteUser = (req, res) => {
    const {idUser} = req.params;
    res.json({
        message: 'DELETE user success',
        data: {
            id: idUser,
            name: "Archico",
            email: "archico@del.ac.id",
            address: "Los Angeles"
        },
    })
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
};

// const express = require('express');
// const { PrismaClient } = require('@prisma/client')
// const prisma = new PrismaClient();

// const app = express();
// app.use(express.json());

// // get
// app.get