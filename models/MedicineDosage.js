const mongoose = require('mongoose');

const MedicineDosageSchema = new mongoose.Schema({
  medicine: {
    type: mongoose.Schema.ObjectId,
    ref: 'Medicine',
    required: true,
  },
  dosage: {
    type: Number,
    required: [true, 'Please specify a dosage quantity'],
  },
});

module.exports = mongoose.model('MedicineDosage', MedicineDosageSchema);
