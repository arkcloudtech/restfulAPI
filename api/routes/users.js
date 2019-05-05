const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');

// Create
router.post('/', (req, res, next)=>{
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        Name: req.body.Name,
        Email: req.body.Email,
        Dob: req.body.Dob,
        UserName: req.body.UserName,
        Password: req.body.Password
    });
    user
        .save()
        .then(saveResult=>{
            console.log(saveResult);
            res.status(201).json({
                message: "User Added Successfully",
                created: user
            });
        })
        .catch(saveErr=> {
            console.log(saveErr);
            res.status(500).json({ error: saveErr });
        });
});

// Read
router.get('/:userId', (req, res, next)=>{
    const id = req.params.userId;
    User.findById(id)
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
    User.find()
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
router.patch('/:userId', (req, res, next)=>{
    const id = req.params.userId;
    const uOps = {};
    for(const ops of req.body) {
        uOps[ops.propName] = ops.value;
    };
    User.update({_id: id }, { $set: uOps })
        .exec()
        .then(updateResult=>{
            res.status(200).json(updateResult);
        })
        .catch(updateErr=>{
            res.status(500).json({ error: updateErr });
        });
});

// Delete
router.delete('/:userId', (req, res, next)=>{
    const id = req.params.userId;
    User.remove({_id: id })
        .exec()
        .then(deleteResult=>{
            res.status(200).json({deleteResult});
        })
        .catch(deleteError=>{
            res.status(500).json({error: deleteError});
        });
});

module.exports = router;