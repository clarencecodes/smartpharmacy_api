const Medicine = require('../models/Medicine');
const Prescription = require('../models/Prescription');

// @desc    Get all prescriptions
// @route   GET /api/v1/prescriptions
// @access  Private
exports.getPrescriptions = async (req, res, next) => {
  try {
    const prescriptions = await Prescription.find();
    res.status(200).json({
      success: true,
      count: prescriptions.length,
      data: prescriptions,
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Get single prescription
// @route   GET /api/v1/prescriptions/:id
// @access  Private
exports.getPrescription = async (req, res, next) => {
  try {
    const prescription = await Prescription.findById(req.params.id);

    if (!prescription) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: prescription });
  } catch (err) {
    res.status(400).json({ success: false });
  }
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
// @route   PUT /api/v1/prescriptions/:id
// @access  Private
exports.updatePrescription = async (req, res, next) => {
  try {
    const prescription = await Prescription.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!prescription) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: prescription });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Delete prescription
// @route   DELETE /api/v1/prescriptions/:id
// @access  Private
exports.deletePrescription = async (req, res, next) => {
  try {
    const prescription = await Prescription.findByIdAndDelete(req.params.id);

    if (!prescription) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Dispense prescription
// @route   PUT /api/v1/prescriptions/dispense/:id
// @access  Private
exports.dispensePrescription = async (req, res, next) => {
  var i;
  // Check if there is enough medicine to be dispensed and update stock levels
  // Set prescription dispenseStatus to 'dispensed'
  // Return the relevant drawers
  const prescription = await Prescription.findById(req.params.id);

  if (!prescription) {
    return res.status(400).json({
      success: false,
      msg: `Unable to find prescription with id ${req.params.id}`,
    });
  }

  if (prescription['dispenseStatus'] === 'dispensed') {
    return res.status(400).json({
      success: false,
      msg: `Prescription ${req.params.id} has already been dispensed`,
    });
  }

  const medicineIds = prescription['medicines'];

  // Check if there are enough stocks
  var medicinesArr = [];
  for (i = 0; i < medicineIds.length; i++) {
    let id = medicineIds[i];
    let medicine = await Medicine.findById(id);
    let updatedStock = medicine['stock'] - medicine['dosage'];

    if (updatedStock < 0) {
      return res.status(400).json({
        success: false,
        msg: `Not enough stock for medicine ${id}`,
      });
    }
    medicinesArr.push(medicine);
  }

  // If there are enough stocks for all medicines, update the DB
  // Dispense the medicines
  for (i = 0; i < medicinesArr.length; i++) {
    let medicine = medicinesArr[i];
    await medicine.update(
      {
        stock: medicine['stock'] - medicine['dosage'],
      },
      {
        new: true,
        runValidators: true,
      }
    );
  }

  // Set the prescription status to 'dispensed'
  await prescription.update(
    {
      dispenseStatus: 'dispensed',
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    success: true,
    msg: `Prescription ${req.params.id} dispensed`,
    data: medicinesArr,
  });
};
