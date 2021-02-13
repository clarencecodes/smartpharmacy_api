const e = require('express');
const MedicineDosage = require('../models/MedicineDosage');

// @desc    Get all medicine dosages
// @route   GET /api/v1/medicineDosages
// @access  Private
exports.getMedicineDosages = async (req, res, next) => {
  try {
    const medicineDosages = await MedicineDosage.find()
      .populate({
        path: 'medicine',
        model: 'Medicine',
      })
      .exec();
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
    const medicineDosage = await MedicineDosage.findById(req.params.id)
      .populate({
        path: 'medicine',
        model: 'Medicine',
      })
      .exec();

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
    // Find an existing medicineDosage with the specified medicine id and dosage quantity
    const existingMedicineDosage = await MedicineDosage.findOne({
      medicine: req.body.medicine,
      dosage: req.body.dosage,
    });

    // If it exists, return it without creating a new one
    if (existingMedicineDosage) {
      return res
        .status(200)
        .json({ success: true, data: existingMedicineDosage });
    }

    // If it doesn't exist, create a new one and return it in the response
    const newMedicineDosage = await MedicineDosage.create(req.body);

    if (!newMedicineDosage) {
      return res.status(400).json({ success: false });
    }

    return res.status(200).json({ success: true, data: newMedicineDosage });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};
