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

exports.getChapterById = async (id) => {
    try {
        const chapter = await prisma.chapter.findUnique({
            where: {
                id
            }
        });
        return chapter;
    } catch (error) {
        throw new Error(`Error retrieving chapter with id ${id}`);
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

exports.updateChapter = async(id, updateData) => {
    try {
        const chapter = await prisma.chapter.update({
            where: { id },      
            data: updateData,     
        });
        return chapter;  
    } catch (error) {
        throw new Error(error.message);  
    }
}

exports.deleteChapter = async(id) => {
    try {
        await prisma.chapter.delete({
            where: { id },
        });
        return `Successfully deleted chapter with id: ${id}`;
    } catch (error) {
        throw new Error('Error deleting chapter: ' + error.message); 
    }
}