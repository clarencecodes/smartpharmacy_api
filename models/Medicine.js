const mongoose = require('mongoose');

const MedicineSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    unique: true,
    required: [true, 'Please add a medicine name'],
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
  },
  stock: {
    type: Number,
    required: [
      true,
      'Please specify the current medicine stock available in the cabinet drawer',
    ],
  },
  medicineType: {
    type: String,
    required: [true, 'Please specify the medicine type (tablets or bottles)'],
    enum: ['tablets', 'bottles'],
  },
  cabinetDrawerIndex: {
    type: Number,
    unique: true,
    required: true,
    min: [1, 'Cabinet drawer index cannot be less than 0'],
    max: [16, 'Cabinet drawer index cannot be more than 15'],
  },
});

module.exports = mongoose.model('Medicine', MedicineSchema);
