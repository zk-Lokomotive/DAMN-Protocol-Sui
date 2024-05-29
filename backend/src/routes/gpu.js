const express = require('express');
const { listGPUs, leaseGPU } = require('../controllers/gpu');

const router = express.Router();

router.get('/gpus', listGPUs);
router.post('/lease/:id', leaseGPU);

module.exports = router;
