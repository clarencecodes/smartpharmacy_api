const express = require('express');
const {
  register,
  login,
  logout,
  updatePassword,
  updateDetails,
} = require('../controllers/auth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);

router.route('/updateDetails/:id').put(updateDetails);

module.exports = router;
