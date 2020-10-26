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
exports.createPrescription = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Create new prescription' });
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
