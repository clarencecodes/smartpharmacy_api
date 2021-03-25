const mongoose = require('mongoose');

const PDFSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a PDF name'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  fileSize: {
    type: Number,
    default: 0.0,
  },
});

module.exports = mongoose.model('FilePDF', PDFSchema);
