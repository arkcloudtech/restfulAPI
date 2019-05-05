const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const MedicalRecommendation = require('../models/medrec');
const multer = require('multer');
const upload = multer({dest: 'images/medrec/'});
// Create
router.post('/', upload.single('image'), (req, res, next)=>{
    console.log('about to upload and image:', req.file);
    const medRec = new MedicalRecommendation({
        _id: new mongoose.Types.ObjectId(),
        MedicalRecommendationNumber: req.body.MedicalRecommendationNumber,
        Issuer: req.body.Issuer,
        State: req.body.State,
        ExpirationDate: req.body.ExpirationDate,
        ImagePath: req.body.ImagePath
    });
    medRec
        .save()
        .then(saveResult=>{
            console.log(saveResult);
            res.status(201).json({
                message: "Medical Recommendation Added Successfully",
                created: medRec
            });
        })
        .catch(saveErr=> {
            console.log(saveErr);
            res.status(500).json({ error: saveErr });
        });
});

// Read
router.get('/:medrecId', (req, res, next)=>{
    const id = req.params.medrecId;
    MedicalRecommendation.findById(id)
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
    MedicalRecommendation.find()
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
router.patch('/:medrecId', (req, res, next)=>{
    const id = req.params.medrecId;
    const uOps = {};
    for(const ops of req.body) {
        uOps[ops.propName] = ops.value;
    };
    MedicalRecommendation.update({_id: id }, { $set: uOps })
        .exec()
        .then(updateResult=>{
            res.status(200).json(updateResult);
        })
        .catch(updateErr=>{
            res.status(500).json({ error: updateErr });
        });
});

// Delete
router.delete('/:medrecId', (req, res, next)=>{
    const id = req.params.medrecId;
    MedicalRecommendation.remove({_id: id })
        .exec()
        .then(deleteResult=>{
            res.status(200).json({deleteResult});
        })
        .catch(deleteError=>{
            res.status(500).json({error: deleteError});
        });
});

module.exports = router;