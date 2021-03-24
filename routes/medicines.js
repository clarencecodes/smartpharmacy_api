const express = require('express');

const {
  getMedicines,
  getMedicine,
  createMedicine,
  updateMedicine,
  deleteMedicine,
  batchUpdateMedicines,
} = require('../controllers/medicines');

const router = express.Router();

router.route('/').get(getMedicines).post(createMedicine);

router
  .route('/:id')
  .get(getMedicine)
  .put(updateMedicine)
  .delete(deleteMedicine);

router.route('/batch-update').post(batchUpdateMedicines);

module.exports = router;
