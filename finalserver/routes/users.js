// routes/user.js

const express = require('express');
const router = express.Router();
const userController = require('../controller/users.js');
router.post('/signup', userController.addUserRecord); // Add a new user
router.get('/id', userController.getUserRecordById); // Get user by ID
router.post('/login', userController.checkLogin); // Check login
router.get('/username/:name', userController.getUserByName); // Get users by name

module.exports = router;
