// @ts-ignore
const courseService = require('../services/CourseService');

// Controller untuk mendapatkan daftar course
const getAllCourses = async (req, res) => {
    try {
        const courses = await courseService.getAllCourses();
        res.status(200).json(courses); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller untuk mendapatkan course by id
const getCourseById = async(req, res) => {
    const courseId = parseInt(req.params.id);

    try {
        const course = await courseService.getCourseById(courseId);
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ message: `Failed to get course with id ${ courseId }`})
    }
}

// Controller untuk membuat course baru
const createCourse = async (req, res) => {
    try {
        const { name, userId } = req.body;
        const course = await courseService.createCourse(name, userId);
        res.status(201).json(course);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller untuk update course by id
const updateCourse = async (req, res) => {
    const courseId = parseInt(req.params.id);
    const { name } = req.body;

    const updateData = {};
    if (name) updateData.name = name;

    try {
        const updateCourse = await courseService.updateCourse(courseId, updateData);
        res.status(200).json(updateCourse);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller untuk delete course by id
const deleteCourse = async (req, res) => {
    const courseId = parseInt(req.params.id);

    try {
        const deleteCourse = await courseService.deleteCourse(courseId);
        res.status(200).json(deleteCourse);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create course' });
    }
};

module.exports = {
    getAllCourses,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse
};
