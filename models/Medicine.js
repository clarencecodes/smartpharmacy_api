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
  maxStock: {
    type: Number,
    required: [
      true,
      'Please specify the maximum medicine stock that the cabinet drawer can hold',
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
    min: [0, 'Cabinet drawer index cannot be less than 0'],
    max: [15, 'Cabinet drawer index cannot be more than 15'],
  },
});

module.exports = mongoose.model('Medicine', MedicineSchema);
