const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllUsers = async () => {
    try {
        const users = await prisma.user.findMany(); 
        return users;
    } catch (error) {
        throw new Error('Error retrieving users');
    }
};

exports.getUserById = async (user_id) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                user_id
            },
        });
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
}

exports.createUser = async (
        name, 
        username, 
        password,
        user_role,
        student_id,
        student_point,
        student_course,
        student_badge,
        instructor_id,
        instructor_course) => {
    try {
        const newUser = await prisma.user.create({
            data: { 
                name, 
                username, 
                password,
                user_role,
                student_id,
                student_point,
                student_course,
                student_badge,
                instructor_id,
                instructor_course,
                createdAt: new Date()
            }
        });
        return newUser;
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.updateUser = async(user_id, updateData) => {
    try {
        const user = await prisma.user.update({
            where: { user_id },      
            data: updateData,     
        });
        return user;  
    } catch (error) {
        throw new Error(error.message);  
    }
}

exports.deleteUser = async(user_id) => {
    try {
        await prisma.user.delete({
            where: { user_id },
        });
        return `Success deleting user with id ${user_id}`;
    } catch (error) {
        throw new Error('Error deleting user: ' + error.message); 
    }
}