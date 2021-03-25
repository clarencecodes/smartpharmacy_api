const express = require('express');

const {
    createPDF,
    getPDFs,
    getPDF,
    deletePDF
} = require('../controllers/filePdf');

const router = express.Router();

router.route('/').post(createPDF).get(getPDFs);

router.route('/:id').get(getPDF).delete(deletePDF);

module.exports = router;
