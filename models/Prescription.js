const mongoose = require('mongoose');

const PrescriptionSchema = new mongoose.Schema({
  patientAdmissionDateAndTime: {
    type: Date,
    default: () => {
      // set the admission date & time to be anytime within the past 30 minutes
      return Date.now() - Math.random() * (1000 * 60 * 30);
    },
  },
  patientName: {
    type: String,
    maxlength: [100, 'Name cannot be more than 100 characters'],
    required: true,
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
    validate: [
      arrayLimit,
      'A prescription should contain at least 1 medicine.',
    ],
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

function arrayLimit(val) {
  return val.length >= 1;
}

module.exports = mongoose.model('Prescription', PrescriptionSchema);
