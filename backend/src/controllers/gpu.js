const GPUs = [
  { id: 1, name: 'NVIDIA RTX 3131', price: 10 },
  { id: 2, name: 'NVIDIA RTX 6969', price: 8 }
];

const listGPUs = async () => {
  return GPUs;
};

const leaseGPU = async (id, user) => {
  /*
 TO DO:
 • add Rent functions
  */
};

module.exports = { listGPUs, leaseGPU };
