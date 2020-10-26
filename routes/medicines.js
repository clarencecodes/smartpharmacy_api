const express = require('express');

const {
  getMedicines,
  getMedicine,
  createMedicine,
  updateMedicine,
  deleteMedicine,
} = require('../controllers/medicines');

const router = express.Router();

router.route('/').get(getMedicines).post(createMedicine);

router
  .route('/:id')
  .get(getMedicine)
  .put(updateMedicine)
  .delete(deleteMedicine);

module.exports = router;
