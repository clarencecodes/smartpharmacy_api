const Medicine = require('../models/Medicine');

// @desc    Get all medicines
// @route   GET /api/v1/medicines
// @access  Private
exports.getMedicines = async (req, res, next) => {
  try {
    const medicines = await Medicine.find().sort([
      ['cabinetDrawerIndex', 'ascending'],
    ]);
    res.status(200).json({
      success: true,
      count: medicines.length,
      data: medicines,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: String(err) });
  }
};

// @desc    Get single medicine
// @route   GET /api/v1/medicines/:id
// @access  Private
exports.getMedicine = async (req, res, next) => {
  try {
    const medicine = await Medicine.findById(req.params.id);

    if (!medicine) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: medicine });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Create new medicine
// @route   POST /api/v1/medicines
// @access  Private
exports.createMedicine = async (req, res, next) => {
  try {
    const medicine = await Medicine.create(req.body);
    res.status(201).json({ success: true, data: medicine });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Update medicine
// @route   PUT /api/v1/medicines/:id
// @access  Private
exports.updateMedicine = async (req, res, next) => {
  try {
    const medicine = await Medicine.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!medicine) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: medicine });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Delete medicine
// @route   DELETE /api/v1/medicines/:id
// @access  Private
exports.deleteMedicine = async (req, res, next) => {
  try {
    const medicine = await Medicine.findByIdAndDelete(req.params.id);

    if (!medicine) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};
