const express = require('express');
const router = express.Router();

// Create
router.post('/', (req, res, next)=>{
    res.status(201).json({
        message: "stateIdId added"
    });
});

// Read
router.get('/:stateIdId', (req, res, next)=>{
    res.status(200).json({
        result: { item: `stateId${req.params.stateIdId}`}
    });
});
router.get('/', (req, res, next)=>{
    res.status(200).json({
        results: ["stateId1", "stateId2", "stateId3"]
    });
});

// Update
router.patch('/:stateIdId', (req, res, next)=>{
    res.status(200).json({
        result: { updated: `stateId${req.params.stateIdId}`}
    });
});

// Delete
router.delete('/:stateIdId', (req, res, next)=>{
    res.status(200).json({
        result: { deleted: `stateId${req.params.stateIdId}`}
    });
});

module.exports = router;