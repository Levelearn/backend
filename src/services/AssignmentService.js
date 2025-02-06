const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllAssignments = async () => {
    try {
        const assignments = await prisma.assignment.findMany(); 
        return assignments;
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.getAssignmentById = async (assign_id) => {
    try {
        const assignment = await prisma.assignment.findUnique({
            where: {
                assign_id
            },
        });
        return assignment;
    } catch (error) {
        throw new Error(`Error retrieving assignment with id ${assign_id}`);
    }
}

exports.createAssignment = async (newData) => {
    try {
        const newAssignment = await prisma.assignment.create({
            data: newData
        });
        return newAssignment;
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.updateAssignment = async(assign_id, updateData) => {
    try {
        const assignment = await prisma.assignment.update({
            where: { assign_id },      
            data: updateData,     
        });
        return assignment;  
    } catch (error) {
        throw new Error(error.message);  
    }
}

exports.deleteAssignment = async(assign_id) => {
    try {
        await prisma.assignment.delete({
            where: { assign_id },
        });
        return `Successfully deleted assignment with id: ${assign_id}`;
    } catch (error) {
        throw new Error('Error deleting assignment: ' + error.message); 
    }
}