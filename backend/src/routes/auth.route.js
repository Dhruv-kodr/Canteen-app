const express = require('express');
const authController = require('../controllers/auth.controller')
const googleAuthController = require('../controllers/googleAuth.controller')
const router = express.Router();

router.post('/login',authController.loginUser)
router.post('/register',authController.RegisterUser)
router.post('/google-login',googleAuthController.googleLogin)

module.exports = router;