const express = require('express');
const { authenticate } = require('../controllers/auth');

const router = express.Router();

router.post('/authenticate', authenticate);

module.exports = router;
