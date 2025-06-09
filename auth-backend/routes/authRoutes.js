const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/registerController');
const { loginUser } = require('../controllers/loginController');
const { logoutUser } = require('../controllers/logoutController');
// Define routes for user registration and login
router.post('/register', registerUser);
router.post('/login', loginUser, (req, res) => {
    res.status(200).json({ message: 'Login successful' });
});
router.post('/logout', logoutUser, (req, res) => {
    res.status(200).json({ message: 'Logout successful' });
});
module.exports = router;
