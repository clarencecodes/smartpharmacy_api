const { Router } = require('express');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ success: true, msg: 'Get all prescriptions' });
});

router.get('/:patientQueueNumber', (req, res) => {
    res
        .status(200)
        .json({
            success: true,
            msg: `Get prescription for patient queue no. ${req.params.patientQueueNumber}`,
        });
});

router.post('/', (req, res) => {
    res.status(200).json({ success: true, msg: 'Create new prescription' });
});

router.put('/:patientQueueNumber', (req, res) => {
    res
        .status(200)
        .json({
            success: true,
            msg: `Update prescription for patient queue no. ${req.params.patientQueueNumber}`,
        });
});

router.delete('/:patientQueueNumber', (req, res) => {
    res
        .status(200)
        .json({
            success: true,
            msg: `Delete prescription for patient queue no. ${req.params.patientQueueNumber}`,
        });
});

module.exports = router;
