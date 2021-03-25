const express = require('express');

const {
  createPDF,
  getPDFs,
  getPDF,
  deletePDF,
} = require('../controllers/filePDFs');

const router = express.Router();

router.route('/').post(createPDF).get(getPDFs);

router.route('/:id').get(getPDF).delete(deletePDF);

module.exports = router;
