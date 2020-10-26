const Prescription = require('../models/Prescription');

// @desc    Get all prescriptions
// @route   GET /api/v1/prescriptions
// @access  Private
exports.getPrescriptions = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Get all prescriptions' });
};

// @desc    Get single prescription
// @route   GET /api/v1/prescriptions/:patientQueueNumber
// @access  Private
exports.getPrescription = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Get prescription for patient queue no. ${req.params.patientQueueNumber}`,
  });
};

// @desc    Create new prescription
// @route   POST /api/v1/prescriptions
// @access  Private
exports.createPrescription = async (req, res, next) => {
  try {
    const prescription = await Prescription.create(req.body);
    res.status(201).json({ success: true, data: prescription });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Update prescription
// @route   PUT /api/v1/prescriptions/:patientQueueNumber
// @access  Private
exports.updatePrescription = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Update prescription for patient queue no. ${req.params.patientQueueNumber}`,
  });
};

// @desc    Delete prescription
// @route   DELETE /api/v1/prescriptions/:patientQueueNumber
// @access  Private
exports.deletePrescription = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Delete prescription for patient queue no. ${req.params.patientQueueNumber}`,
  });
};
