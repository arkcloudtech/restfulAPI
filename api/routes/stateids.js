const express = require('express');
const router = express.Router();

// Create
router.post('/', (req, res, next)=>{
    const stateId = {
        StateIdNumber: req.body.StateIdNumber,
        State: req.body.State,
        ExpirationDate: req.body.ExpirationDate,
        ImagePath: req.body.ImagePath
    }
    res.status(201).json({
        message: "StateId Added Successfully",
        data: stateId
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