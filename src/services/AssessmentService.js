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

exports.getAssessmentById = async (assess_id) => {
    try {
        const assessment = await prisma.assessment.findUnique({
            where: {
                assess_id
            },
        });
        return assessment;
    } catch (error) {
        throw new Error(`Error retrieving assessment with id ${assess_id}`);
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

exports.updateAssessment = async(assess_id, updateData) => {
    try {
        const assessment = await prisma.assessment.update({
            where: { assess_id },      
            data: updateData,     
        });
        return assessment;  
    } catch (error) {
        throw new Error(error.message);  
    }
}

exports.deleteAssessment = async(assess_id) => {
    try {
        await prisma.assessment.delete({
            where: { assess_id },
        });
        return `Successfully deleted assessment with id: ${assess_id}`;
    } catch (error) {
        throw new Error('Error deleting assessment: ' + error.message); 
    }
}