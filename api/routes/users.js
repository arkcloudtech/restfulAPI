const express = require('express');
const router = express.Router();

// Create
router.post('/', (req, res, next)=>{
    const user = {
        Name: req.body.Name,
        Email: req.body.Email,
        Dob: req.body.Dob,
        UserName: req.body.UserName,
        Password: req.body.Password
    };

    res.status(201).json({
        message: "User Added Successfully",
        data: user
    });
});

// Read
router.get('/:userId', (req, res, next)=>{
    res.status(200).json({
        result: { item: `user${req.params.userId}`}
    });
});
router.get('/', (req, res, next)=>{
    res.status(200).json({
        results: ["user1", "user2", "user3"]
    });
});

// Update
router.patch('/:userId', (req, res, next)=>{
    res.status(200).json({
        result: { updated: `user${req.params.userId}`}
    });
});

// Delete
router.delete('/:userId', (req, res, next)=>{
    res.status(200).json({
        result: { deleted: `user${req.params.userId}`}
    });
});

module.exports = router;