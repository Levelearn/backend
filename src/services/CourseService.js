const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllCourses = async () => {
    try {
        const courses = await prisma.course.findMany(); 
        return courses;
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.getCourseById = async (course_id) => {
    try {
        const course = await prisma.course.findUnique({
            where: {
                course_id
            },
        });
        return course;
    } catch (error) {
        throw new Error(`Error retrieving course with id ${course_id}`);
    }
}

exports.createCourse = async (course_code, course_name) => {
    try {
        const newCourse = await prisma.course.create({
            data: {
                course_code,
                course_name,
            },
        });
        return newCourse;
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.updateCourse = async(course_id, updateData) => {
    try {
        const course = await prisma.course.update({
            where: { course_id },      
            data: updateData,     
        });
        return course;  
    } catch (error) {
        throw new Error(error.message);  
    }
}

exports.deleteCourse = async(course_id) => {
    try {
        await prisma.course.delete({
            where: { course_id },
        });
        return "Success deleting course";
    } catch (error) {
        throw new Error('Error deleting course: ' + error.message); 
    }
}