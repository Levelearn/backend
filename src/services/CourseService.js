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

exports.getCourseById = async (id) => {
    try {
        const course = await prisma.course.findUnique({
            where: {
                id
            },
        });
        return course;
    } catch (error) {
        throw new Error(`Error retrieving course with id ${id}`);
    }
}

exports.createCourse = async (name, userId) => {
    try {
        const newCourse = await prisma.course.create({
            data: {
                name,
                userId,
            },
        });
        return newCourse;
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.updateCourse = async(id, updateData) => {
    try {
        const course = await prisma.course.update({
            where: { id },      
            data: updateData,     
        });
        return course;  
    } catch (error) {
        throw new Error(error.message);  
    }
}

exports.deleteCourse = async(id) => {
    try {
        await prisma.course.delete({
            where: { id },
        });
        return "Success deleting course";
    } catch (error) {
        throw new Error('Error deleting course: ' + error.message); 
    }
}