const MedicineDosage = require('../models/MedicineDosage');

// @desc    Get all medicine dosages
// @route   GET /api/v1/medicineDosages
// @access  Private
exports.getMedicineDosages = async (req, res, next) => {
  try {
    const medicineDosages = await MedicineDosage.find();
    res.status(200).json({
      success: true,
      count: medicineDosages.length,
      data: medicineDosages,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: String(err) });
  }
};

// @desc    Get single medicine dosage
// @route   GET /api/v1/medicineDosages/:id
// @access  Private
exports.getMedicineDosage = async (req, res, next) => {
  try {
    const medicineDosage = await MedicineDosage.findById(req.params.id);

    if (!medicineDosage) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: medicineDosage });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Create medicine dosage
// @route   POST /api/v1/medicineDosages
// @access  Private
exports.createMedicineDosage = async (req, res, next) => {
  try {
    const medicineDosage = await MedicineDosage.create(req.body);

    if (!medicineDosage) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: medicineDosage });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};
