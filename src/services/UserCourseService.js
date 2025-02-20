const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllUserCourses = async () => {
    try {
        const userCourses = await prisma.userCourse.findMany(); 
        return userCourses;
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.getUserCourseById = async (id) => {
    try {
        const userCourse = await prisma.userCourse.findUnique({
            where: {
                id
            },
        });
        return userCourse;
    } catch (error) {
        throw new Error(`Error retrieving userCourse with id ${id}`);
    }
}

exports.createUserCourse = async (newData) => {
    try {
        const newUserCourse = await prisma.userCourse.create({
            data: newData
        });
        return newUserCourse;
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.updateUserCourse = async(id, updateData) => {
    try {
        const userCourse = await prisma.userCourse.update({
            where: { id },      
            data: updateData,     
        });
        return userCourse;  
    } catch (error) {
        throw new Error(error.message);  
    }
}

exports.deleteUserCourse = async(id) => {
    try {
        await prisma.userCourse.delete({
            where: { id },
        });
        return `Successfully deleted userCourse with id: ${id}`;
    } catch (error) {
        throw new Error('Error deleting userCourse: ' + error.message); 
    }
}

// SPECIAL SERVICES

exports.getUsersByCourse = async (courseId) => {
    try {
        const user = await prisma.userCourse.findMany({
            where: {
                courseId: parseInt(courseId)
            },
            select: {
                user: true
            }
        });

        if (!user.length) {
            throw new Error(`No user found for course with id ${courseId}`);
        }

        return user;
    } catch (error) {
        throw new Error(error.message);
    }
}

exports.getCoursesByUser = async (userId) => {
    try {
        const course = await prisma.userCourse.findMany({
            where: {
                userId: parseInt(userId)
            },
            select: {
                course: true
            }
        });

        if (!course.length) {
            throw new Error(`No course found for user with id ${userId}`);
        }

        return course.map(item => item.course);
    } catch (error) {
        throw new Error(error.message);
    }
}

exports.getUserCourseByUserByCourse = async (userId, courseId) => {
    try {
        const userCourse = await prisma.userCourse.findMany({
            where: {
                userId,
                courseId
            },
        });
        return userCourse;
    } catch (error) {
        throw new Error(error.message);
    }
}