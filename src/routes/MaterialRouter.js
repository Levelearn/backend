const express = require('express');
// @ts-ignore
const materialController = require('../controllers/MaterialController');

const router = express.Router();

// Route for get all materials
router.get('/material', materialController.getAllMaterials);

// Route for get material by id
router.get('/material/:id', materialController.getMaterialById);

// Router for create material
router.post('/material', materialController.createMaterial);

// Router for update material by id
router.put('/material/:id', materialController.updateMaterial);

// Router for delete material by id
router.delete('/material/:id', materialController.deleteMaterial);

module.exports = router;
