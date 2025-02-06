const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllMaterials = async () => {
    try {
        const materials = await prisma.material.findMany(); 
        return materials;
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.getMaterialById = async (material_id) => {
    try {
        const material = await prisma.material.findUnique({
            where: {
                material_id
            },
        });
        return material;
    } catch (error) {
        throw new Error(`Error retrieving material with id ${material_id}`);
    }
}

exports.createMaterial = async (newData) => {
    try {
        const newMaterial = await prisma.material.create({
            data: newData
        });
        return newMaterial;
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.updateMaterial = async(material_id, updateData) => {
    try {
        const material = await prisma.material.update({
            where: { material_id },      
            data: updateData,     
        });
        return material;  
    } catch (error) {
        throw new Error(error.message);  
    }
}

exports.deleteMaterial = async(material_id) => {
    try {
        await prisma.material.delete({
            where: { material_id },
        });
        return `Successfully deleted material with id: ${material_id}`;
    } catch (error) {
        throw new Error('Error deleting material: ' + error.message); 
    }
}