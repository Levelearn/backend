const chapterService = require('../services/ChapterService');

// Controller untuk mendapatkan daftar chapter
const getAllChapters = async (req, res) => {
    try {
        const chapters = await chapterService.getAllChapters();
        res.status(200).json(chapters);
        console.log(`getAllChapters successfully requested`);
    } catch (error) {
        res.status(500).json({ message: "Failed to get chapters", detail: error.message });
        console.log(error.mesage);
    }
};

// Controller untuk mendapatkan chapter by id
const getChapterById = async(req, res) => {
    const id = parseInt(req.params.id);

    try {
        const chapter = await chapterService.getChapterById(id);
        res.status(200).json(chapter);
    } catch (error) {
        res.status(500).json({ message: `Failed to get chapter with id ${ id }`})
        console.log(error.mesage);
    }
}

// Controller untuk membuat chapter baru
const createChapter = async (req, res) => {
    try {
        const newData = req.body;

        const chapter = await chapterService.createChapter(newData);
        res.status(201).json({message: `Successfully create new chapter ${newData.name}`, chapter: chapter});
    } catch (error) {
        res.status(500).json({ message: "Failed to create new chapter", data: error.message });
        console.log(error.message);
        
    }
};

// Controller untuk update chapter by id
const updateChapter = async (req, res) => {
    const id = parseInt(req.params.id);

    const updateData = req.body;

    try {
        const updateChapter = await chapterService.updateChapter(id, updateData);
        res.status(200).json({message: "Successfully updated chapter", chapter: updateChapter});
    } catch (error) {
        res.status(500).json({ message: "Failed to update chapter", detail: error.message });
        console.log(error.message);
        
    }
};

// Controller untuk delete chapter by id
const deleteChapter = async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        const deleteChapter = await chapterService.deleteChapter(id);
        res.status(200).json(deleteChapter);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create chapter' });
        console.log(error.message);
        
    }
};


// SPECIAL CONTROLLER

const getMaterialsByChapter = async (req, res) => {
    const chapterId = parseInt(req.params.id);

    try {
        const materials = await chapterService.getMaterialsByChapter(chapterId);
        res.status(200).json(materials);
    } catch (error) {
        res.status(500).json({ message: `Failed to get material from chapter ${chapterId}`, detail: error.message});
        console.log(error.message);
    }

};

const getAssessmentsByChapter = async (req, res) => {
    const chapterId = parseInt(req.params.id);

    try {
        const assessments = await chapterService.getAssessmentsByChapter(chapterId);
        res.status(200).json(assessments);
    } catch (error) {
        res.status(500).json({ message: `Failed to get assessment from chapter ${chapterId}`, detail: error.message});
        console.log(error.message);
    }
    
};

const getAssignmentsByChapter = async (req, res) => {
    const chapterId = parseInt(req.params.id);

    try {
        const assignments = await chapterService.getAssignmentsByChapter(chapterId);
        res.status(200).json(assignments);
    } catch (error) {
        res.status(500).json({ message: `Failed to get assignment from chapter ${chapterId}`, detail: error.message});
        console.log(error.message);
    }
    
};

const getContentByChapter = async (req, res) => {
    const chapterId = parseInt(req.params.id);

    try {
        const materials = await chapterService.getMaterialsByChapter(chapterId);
        const assessments = await chapterService.getAssessmentsByChapter(chapterId);
        const assignments = await chapterService.getAssignmentsByChapter(chapterId);

        chapterContent = {materials, assessments, assignments};

        res.status(200).json(chapterContent);
    } catch (error) {
        res.status(500).json({ message: `Failed to get contents from chapter ${chapterId}`, detail: error.message});
        console.log(error.message);
    }
}


module.exports = {
    getAllChapters,
    getChapterById,
    createChapter,
    updateChapter,
    deleteChapter,
    getMaterialsByChapter,
    getAssessmentsByChapter,
    getAssignmentsByChapter,
    getContentByChapter
};
