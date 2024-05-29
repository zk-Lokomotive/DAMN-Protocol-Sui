const express = require('express');
const { generateImage } = require('../controllers/stableDiffusion');

const router = express.Router();

router.post('/generate', generateImage);

module.exports = router;
