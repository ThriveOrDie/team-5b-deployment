const express = require('express');
const router = express.Router();
const exampleController = require('../controllers/exampleController');

// Define an example route
router.get('/', exampleController.getExample);

module.exports = router;
