const mongoose = require('mongoose');

const PDFSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a PDF name'],
  },
  createdAt: {
    type: Date,
    default: Date.now(), // set the admission date & time to be 15 minutes ago
  },

  fileSize: {
    type: Number,
    default: 0.0
},
  
});

module.exports = mongoose.model('FilePDF', PDFSchema);
