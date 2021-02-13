const mongoose = require('mongoose');

const PrescriptionSchema = new mongoose.Schema({
  patientAdmissionDateAndTime: {
    type: Date,
    default: new Date(Date.now() - 1000 * 60 * 15), // set the admission date & time to be 15 minutes ago
  },
  patientQueueNumber: {
    type: Number,
    unique: true,
    required: true,
  },
  medicineDosages: {
    type: [mongoose.Schema.ObjectId],
    ref: 'MedicineDosage',
    required: true,
  },
  dispenseStatus: {
    type: String,
    required: true,
    enum: ['new', 'dispensed', 'reviewing', 'reviewed'],
  },
  doctorsRemarks: {
    type: String,
    maxlength: [500, 'Doctors remarks cannot be more than 500 characters'],
  },
});

module.exports = mongoose.model('Prescription', PrescriptionSchema);
