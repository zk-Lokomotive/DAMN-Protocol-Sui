const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { authenticate } = require('./controllers/auth');
const { listGPUs, leaseGPU } = require('./controllers/gpu');
const { createNFT } = require('./controllers/nft');
const { generateImage } = require('./controllers/stableDiffusion');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/generate', authenticate, async (req, res) => {
  const { text } = req.body;
  const image = await generateImage(text);
  res.json({ image });
});

app.get('/gpus', authenticate, async (req, res) => {
  const gpus = await listGPUs();
  res.json({ gpus });
});

app.post('/lease/:id', authenticate, async (req, res) => {
  const { id } = req.params;
  await leaseGPU(id, req.user);
  res.status(200).send();
});

app.post('/nft', authenticate, async (req, res) => {
  const { image } = req.body;
  await createNFT(image, req.user);
  res.status(200).send();
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
