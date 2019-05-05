const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Name: { type: String },
    Email: { type: String, required: true },
    Dob: { type: Date, required: true },
    UserName: { type: String, required: true },
    Password: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);