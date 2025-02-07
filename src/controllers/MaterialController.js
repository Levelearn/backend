const materialService = require('../services/MaterialService');

// Controller untuk mendapatkan daftar material
const getAllMaterials = async (req, res) => {
    try {
        const materials = await materialService.getAllMaterials();
        res.status(200).json(materials);
        console.log(`getAllMaterials successfully requested`);
    } catch (error) {
        res.status(500).json({ message: "Failed to get materials", detail: error.message });
        console.log(error.mesage);
    }
};

// Controller untuk mendapatkan material by id
const getMaterialById = async(req, res) => {
    const id = parseInt(req.params.id);

    try {
        const material = await materialService.getMaterialById(id);
        res.status(200).json(material);
    } catch (error) {
        res.status(500).json({ message: `Failed to get material with id ${ id }`})
        console.log(error.mesage);
        
    }
}

// Controller untuk membuat material baru
const createMaterial = async (req, res) => {
    try {
        const newData = req.body;

        const material = await materialService.createMaterial(newData);
        res.status(201).json({message: `Successfully create new material ${newData.name}`, material: material});
    } catch (error) {
        res.status(500).json({ message: "Failed to create new material", data: error.message });
        console.log(error.message);
        
    }
};

// Controller untuk update material by id
const updateMaterial = async (req, res) => {
    const id = parseInt(req.params.id);

    const updateData = req.body;

    try {
        const updateMaterial = await materialService.updateMaterial(id, updateData);
        res.status(200).json({message: "Successfully updated material", material: updateMaterial});
    } catch (error) {
        res.status(500).json({ message: "Failed to update material", detail: error.message });
        console.log(error.message);
        
    }
};

// Controller untuk delete material by id
const deleteMaterial = async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        const deleteMaterial = await materialService.deleteMaterial(id);
        res.status(200).json(deleteMaterial);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create material' });
        console.log(error.message);
        
    }
};

module.exports = {
    getAllMaterials,
    getMaterialById,
    createMaterial,
    updateMaterial,
    deleteMaterial
};
