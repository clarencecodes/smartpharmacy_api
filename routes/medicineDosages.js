const express = require('express');

const {
  getMedicineDosages,
  getMedicineDosage,
  createMedicineDosage,
} = require('../controllers/medicineDosages');

const router = express.Router();

router.route('/').get(getMedicineDosages).post(createMedicineDosage);

router.route('/:id').get(getMedicineDosage);

module.exports = router;
