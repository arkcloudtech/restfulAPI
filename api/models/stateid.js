const mongoose = require('mongoose');

const stateIdSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    StateIdNumber: { type: String },
    State: { type: String, required: true },
    ExpirationDate: { type: Date, required: true },
    ImagePath: { type: String }
});

module.exports = mongoose.model('StateId', stateIdSchema);