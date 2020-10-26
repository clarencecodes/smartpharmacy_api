const mongoose = require('mongoose');

const PrescriptionSchema = new mongoose.Schema({
  patientAdmissionDateAndTime: {
    type: Date,
    default: new Date(Date.now() - 1000 * 60 * 15), // set the admission date & time to be 15 minutes ago
  },
  medicines: {
    type: [String],
    required: true,
  },
  dispenseStatus: {
    type: String,
    required: true,
    enum: ['new', 'dispensed', 'review', 'reviewed'],
  },
  doctorsRemarks: {
    type: String,
    maxlength: [500, 'Doctors remarks cannot be more than 500 characters'],
  },
});

module.exports = mongoose.model('Prescription', PrescriptionSchema);
