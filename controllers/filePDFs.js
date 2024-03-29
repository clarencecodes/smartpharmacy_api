const { populate } = require('../models/FilePDF');
const FilePDF = require('../models/FilePDF');
const Medicine = require('../models/Medicine');

// @desc    Create new PDF file
// @route   POST /api/v1/pdf
// @access  Private
exports.createPDF = async (req, res, next) => {
  try {
    const pdf = await FilePDF.create(req.body);

    if (!pdf) {
      return res.status(400).json({ success: false });
    }

    res.status(201).json({ success: true, data: pdf });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Get all PDF files
// @route   GET /api/v1/pdf
// @access  Private
exports.getPDFs = async (req, res, next) => {
  try {
    const pdf = await FilePDF.find().sort([['createdAt', 'descending']]);

    res.status(200).json({
      success: true,
      data: pdf,
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Get single PDF file
// @route   GET /api/v1/pdf/:id
// @access  Private
exports.getPDF = async (req, res, next) => {
  try {
    const pdf = await FilePDF.findById(req.params.id);
    const medicines = await Medicine.find();

    res.status(200).json({
      success: true,
      data: { pdf, medicines },
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Delete a PDF file
// @route   DELETE /api/v1/pdf/:id
// @access  Private
exports.deletePDF = async (req, res, next) => {
  try {
    const pdf = await FilePDF.findByIdAndDelete(req.params.id);

    if (!pdf) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};
