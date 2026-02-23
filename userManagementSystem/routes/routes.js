const express = require('express');
const UserController = require('../controllers/controller');

const router = express.Router();

router.get('/', UserController.findAll);
router.post('/', UserController.create);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.destroy);

module.exports = router;