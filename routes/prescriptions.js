const express = require('express');

const {
  getPrescriptions,
  getPrescription,
  createPrescription,
  updatePrescription,
  deletePrescription,
  dispensePrescription,
  undoDispensePrescription,
} = require('../controllers/prescriptions');

const router = express.Router();

router.route('/').get(getPrescriptions).post(createPrescription);

router
  .route('/:id')
  .get(getPrescription)
  .put(updatePrescription)
  .delete(deletePrescription);

router.route('/dispense/:id').put(dispensePrescription);
router.route('/undoDispense/:id').put(undoDispensePrescription);

module.exports = router;
