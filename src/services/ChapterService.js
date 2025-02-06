const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllChapters = async () => {
    try {
        const chapters = await prisma.chapter.findMany(); 
        return chapters;
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.getChapterById = async (chapter_id) => {
    try {
        const chapter = await prisma.chapter.findUnique({
            where: {
                chapter_id
            },
        });
        return chapter;
    } catch (error) {
        throw new Error(`Error retrieving chapter with id ${chapter_id}`);
    }
}

exports.createChapter = async (newData) => {
    try {
        const newChapter = await prisma.chapter.create({
            data: newData
        });
        return newChapter;
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.updateChapter = async(chapter_id, updateData) => {
    try {
        const chapter = await prisma.chapter.update({
            where: { chapter_id },      
            data: updateData,     
        });
        return chapter;  
    } catch (error) {
        throw new Error(error.message);  
    }
}

exports.deleteChapter = async(chapter_id) => {
    try {
        await prisma.chapter.delete({
            where: { chapter_id },
        });
        return `Successfully deleted chapter with id: ${chapter_id}`;
    } catch (error) {
        throw new Error('Error deleting chapter: ' + error.message); 
    }
}