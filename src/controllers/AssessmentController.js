const assessmentService = require('../services/AssessmentService');

// Controller untuk mendapatkan daftar assessment
const getAllAssessments = async (req, res) => {
    try {
        const assessments = await assessmentService.getAllAssessments();
        res.status(200).json(assessments);
        console.log(`getAllAssessments successfully requested`);
    } catch (error) {
        res.status(500).json({ message: "Failed to get assessments", detail: error.message });
        console.log(error.mesage);
    }
};

// Controller untuk mendapatkan assessment by id
const getAssessmentById = async(req, res) => {
    const assess_id = parseInt(req.params.id);

    try {
        const assessment = await assessmentService.getAssessmentById(assess_id);
        res.status(200).json(assessment);
    } catch (error) {
        res.status(500).json({ message: `Failed to get assessment with id ${ assess_id }`})
        console.log(error.mesage);
        
    }
}

// Controller untuk membuat assessment baru
const createAssessment = async (req, res) => {
    try {
        const newData = req.body;

        const assessment = await assessmentService.createAssessment(newData);
        res.status(201).json({message: `Successfully create new assessment ${newData.assessment_name}`, assessment: assessment});
    } catch (error) {
        res.status(500).json({ message: "Failed to create new assessment", data: error.message });
        console.log(error.message);
        
    }
};

// Controller untuk update assessment by id
const updateAssessment = async (req, res) => {
    const assess_id = parseInt(req.params.id);

    const updateData = req.body;

    try {
        const updateAssessment = await assessmentService.updateAssessment(assess_id, updateData);
        res.status(200).json({message: "Successfully updated assessment", assessment: updateAssessment});
    } catch (error) {
        res.status(500).json({ message: "Failed to update assessment", detail: error.message });
        console.log(error.message);
        
    }
};

// Controller untuk delete assessment by id
const deleteAssessment = async (req, res) => {
    const assess_id = parseInt(req.params.id);

    try {
        const deleteAssessment = await assessmentService.deleteAssessment(assess_id);
        res.status(200).json(deleteAssessment);
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete assessment' });
        console.log(error.message);
        
    }
};

module.exports = {
    getAllAssessments,
    getAssessmentById,
    createAssessment,
    updateAssessment,
    deleteAssessment
};
