const express = require('express');
const router = express.Router();

// Create
router.post('/', (req, res, next)=>{
    const medRec = {
        MedicalRecommendationNumber: req.body.MedicalRecommendationNumber,
        Issuer: req.body.Issuer,
        State: req.body.State,
        ExpirationDate: req.body.ExpirationDate,
        ImagePath: req.body.ImagePath
    }
    res.status(201).json({
        message: "MedicalRec Added Successfully",
        data: medRec
    });
});

// Read
router.get('/:medrecId', (req, res, next)=>{
    res.status(200).json({
        result: { item: `medRec${req.params.medrecId}`}
    });
});
router.get('/', (req, res, next)=>{
    res.status(200).json({
        results: ["medrec1", "medrec2", "medrec3"]
    });
});

// Update
router.patch('/:medrecId', (req, res, next)=>{
    res.status(200).json({
        result: { updated: `medRec${req.params.medrecId}`}
    });
});

// Delete
router.delete('/:medrecId', (req, res, next)=>{
    res.status(200).json({
        result: { deleted: `medRec${req.params.medrecId}`}
    });
});

module.exports = router;