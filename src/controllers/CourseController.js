// @ts-ignore
const courseService = require('../services/CourseService');

// Controller untuk mendapatkan daftar course
const getAllCourses = async (req, res) => {
    try {
        const courses = await courseService.getAllCourses();
        res.status(200).json(courses); 
    } catch (error) {
        res.status(500).json({ message: "Failed to get course datas", detail: error.message });
        console.log(error.message);
        
    }
};

// Controller untuk mendapatkan course by id
const getCourseById = async(req, res) => {
    const course_id = parseInt(req.params.id);

    try {
        const course = await courseService.getCourseById(course_id);
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ message: `Failed to get course with id ${ course_id }`})
        console.log(error.mesage);
        
    }
}

// Controller untuk membuat course baru
const createCourse = async (req, res) => {
    try {
        const { course_code, course_name } = req.body;
        const course = await courseService.createCourse(course_code, course_name);
        res.status(201).json({message: `Successfully create new course ${course_name}`, course: course});
    } catch (error) {
        res.status(500).json({ message: "Failed to create new course", detail: error.message });
        console.log(error.message);
        
    }
};

// Controller untuk update course by id
const updateCourse = async (req, res) => {
    const courseId = parseInt(req.params.id);
    const { course_code, course_name } = req.body;

    const updateData = {};

    if (course_code) {
        updateData.course_code = course_code;
    }
    if (course_name) {
        updateData.course_name = course_name;
    }

    try {
        const updateCourse = await courseService.updateCourse(courseId, updateData);
        res.status(200).json({message: "Successfully updated course", course: updateCourse});
    } catch (error) {
        res.status(500).json({ message: "Failed to update course", detail: error.message });
        console.log(error.message);
        
    }
};

// Controller untuk delete course by id
const deleteCourse = async (req, res) => {
    const course_id = parseInt(req.params.id);

    try {
        const deleteCourse = await courseService.deleteCourse(course_id);
        res.status(200).json(deleteCourse);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create course' });
        console.log(error.message);
        
    }
};

module.exports = {
    getAllCourses,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse
};
