const express = require('express');
const {
  register,
  login,
  logout,
  updatePassword,
  updateDetails,
} = require('../controllers/auth');

const router = express.Router();

const { protect } = require('../middleware/auth');

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.put('/updateDetails', protect, updateDetails);

module.exports = router;
