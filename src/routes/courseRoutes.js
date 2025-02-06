const express = require('express');
const prisma = require('./../prismaClient.js')

const router = express.Router();

// Get all courses for logged-in user
router.get('/', async (req, res) => {
    const courses = await prisma.course.findMany({
        where: {
            userId: req.userId
        }
    })
    res.json(courses)
})

// Create a new course
router.post('/', async (req, res) => {
    const { task } = req.body
    
    const course = await prisma.course.create({
        data: {
            task,
            userId: req.userId
        }
    })

    res.json(course)
})

// Update a course
router.put('/:id', async (req, res) => {
    const { completed } = req.body
    const { id } = req.params
    
    const updatedCourse = await prisma.course.update({
        where: {
            id: parseInt(id),
            userId: req.userId
        },
        data: {
            completed: !!completed
        }
    })

    res.json(updatedCourse)
})

// Delete a course
router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const userId = req.userId
    
    await prisma.todo.delete({
        where: {
            id: parseInt(id),
            userId
        }
    })
    
    res.send({ message: "Course deleted" })
})

module.exports = router;