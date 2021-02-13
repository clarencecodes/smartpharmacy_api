const express = require('express');

const {
  getMedicineDosages,
  getMedicineDosage,
} = require('../controllers/medicineDosages');

const router = express.Router();

router.route('/').get(getMedicineDosages);

router.route('/:id').get(getMedicineDosage);

module.exports = router;
