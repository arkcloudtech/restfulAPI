const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const StateId = require('../models/stateid');

// Create
router.post('/', (req, res, next)=>{
const StateId = require('../models/stateid');
    const stateId = new StateId({
        _id: new mongoose.Types.ObjectId(),
        StateIdNumber: req.body.StateIdNumber,
        State: req.body.State,
        ExpirationDate: req.body.ExpirationDate,
        ImagePath: req.body.ImagePath
    });
    stateId
        .save()
        .then(saveResult=>{
            console.log(saveResult);
            res.status(201).json({
                message: "StateId Added Successfully",
                created: stateId
            });
        })
        .catch(saveErr=> {
            console.log(saveErr);
            res.status(500).json({ error: saveErr });
        });
});

// Read
router.get('/:stateIdId', (req, res, next)=>{
    const id = req.params.stateIdId;
    StateId.findById(id)
        .exec()
        .then(doc => { 
            if(doc){
                res.status(200).json(doc);
            } else {
                res.status(404).json({ message: 'record not found'});
            }
        })
        .catch(readErr=>{
            res.status(500).json({ error: readErr });
        });
});
router.get('/', (req, res, next)=>{
    StateId.find()
        .exec()
        .then(docs=>{
            res.status(200).json(docs);
        })
        .catch(listError=>{
            res.status(500).json({
                error: listError
            });
        })
});

// Update
router.patch('/:stateIdId', (req, res, next)=>{
    const id = req.params.stateIdId;
    const uOps = {};
    for(const ops of req.body) {
        uOps[ops.propName] = ops.value;
    };
    StateId.update({_id: id }, { $set: uOps })
        .exec()
        .then(updateResult=>{
            res.status(200).json(updateResult);
        })
        .catch(updateErr=>{
            res.status(500).json({ error: updateErr });
        });
});

// Delete
router.delete('/:stateIdId', (req, res, next)=>{
    const id = req.params.stateIdId;
    StateId.remove({_id: id })
        .exec()
        .then(deleteResult=>{
            res.status(200).json({deleteResult});
        })
        .catch(deleteError=>{
            res.status(500).json({error: deleteError});
        });
});

module.exports = router;