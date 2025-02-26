const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllAssessments = async () => {
    try {
        const assessments = await prisma.assessment.findMany(); 
        return assessments;
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.getAssessmentById = async (id) => {
    try {
        const assessment = await prisma.assessment.findUnique({
            where: {
                id
            },
        });
        return assessment;
    } catch (error) {
        throw new Error(error.message);
    }
}

exports.createAssessment = async (newData) => {
    try {
        const newAssessment = await prisma.assessment.create({
            data: newData
        });
        return newAssessment;
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.updateAssessment = async(id, updateData) => {
    try {
        const assessment = await prisma.assessment.update({
            where: { id },      
            data: updateData,     
        });
        return assessment;  
    } catch (error) {
        throw new Error(error.message);  
    }
}

exports.deleteAssessment = async(id) => {
    try {
        await prisma.assessment.delete({
            where: { id },
        });
        return `Successfully deleted assessment with id: ${id}`;
    } catch (error) {
        throw new Error('Error deleting assessment: ' + error.message); 
    }
}