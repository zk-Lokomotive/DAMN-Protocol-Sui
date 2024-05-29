const express = require('express');
const { createNFT } = require('../controllers/nft');

const router = express.Router();

router.post('/nft', createNFT);

module.exports = router;
