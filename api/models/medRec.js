const mongoose = require('mongoose');

const medRecSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    MedicalRecommendationNumber: { type: String, required: true },
    Issuer: { type: String, required: true },
    State: { type: String, required: true },
    ExpirationDate: { type: Date, required: true },
    ImagePath: { type: String }
});

module.exports = mongoose.model('MedicalRecommendation', medRecSchema);