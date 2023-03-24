const { Router } = require('express');
const usersController = require('../controllers/usersController.js');

const router = Router();

// GET


// POST
router.post('/register', usersController.register);
router.post('/login', usersController.login);


// DELETE


// UPDATE

module.exports = router;
