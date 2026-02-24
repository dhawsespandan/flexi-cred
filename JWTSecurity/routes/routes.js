const express = require('express')
const UserController = require('../controller/controller');
const { authMiddleware } = require('../middleware/middleware');

const router = express.Router();
router.post('/register',UserController.register);
router.post('/login', UserController.login);
router.get('/profile', authMiddleware, UserController.getProfile);

module.exports=router