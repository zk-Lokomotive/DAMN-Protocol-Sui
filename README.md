# DAMN-Protocol
## Decentralized AI Multi Purpose Network


### 0. Brandkit
![logomark](https://github.com/zk-Lokomotive/DAMN-Protocol/assets/158029357/688875fa-7b45-4e6b-b5fe-954b86db7453)

### 1. Overall Architecture

![diagram(42)](https://github.com/zk-Lokomotive/DAMN-Protocol/assets/158029357/c6aa76ac-5f28-47a1-ad6a-24ee882d3a56)

The project will consist of the following main components:
- **User Interface (UI)**: A web or mobile application where users can generate visuals using AI and convert them into NFTs on the **Sui blockchain**.
- **Stable Diffusion AI Module**: The AI model responsible for visual generation.
- **GPU Leasing and Utilization System**: A system where users can lease other people's **GPUs** for AI computations, or use their **local GPUs**.
- **Sui Blockchain**: Used for converting generated visuals into **NFTs** and managing GPU leasing transactions.
- **RPC and Node Infrastructure**: Provides access to GPUs for AI computations via **RPCs**.

### 2. User Interface (UI)
The web or mobile application will include the following functionalities:
- Interface for generating visuals with AI.
- Button to convert generated visuals into NFTs.
- Options for GPU leasing and a list of available GPUs.
- Wallet integration and Sui token transactions.

### 3. Stable Diffusion AI Module
The Stable Diffusion model will generate visuals based on user inputs. This module will operate as follows:
- The user provides input through the UI (e.g., a text description, sampling steps, CFG scale etc...).
- This input is routed through the chain onto the node, then the Stable Diffusion model.
- The model generates a visual based on the input and returns the result to the user.

### 4. GPU Leasing and Utilization System
This system allows users to lease other people's GPUs for AI computations:
- When a user wants to lease a GPU, a list of available GPUs and their leasing costs are displayed.
- The user selects a GPU, pays the required amount of Sui tokens, and leases the GPU.
- The leased GPU is used to run the Stable Diffusion model, and the result is returned to the user.
- GPU owners earn tokens at the end of the leasing transaction.

### 5. Sui Blockchain Integration
The Sui blockchain will be used for both NFT creation and managing GPU leasing transactions:
- Generated visuals are converted into NFTs on the Sui blockchain.
- Each NFT is sent to the user's wallet, alongside with the option of downloading the result.
- GPU leasing transactions are conducted via token transfers on the Sui blockchain.

### 6. RPC and Node Infrastructure
The RPC and node infrastructure will be used to connect the AI nodes into the platform:
- Users make requests on the platform to generate content.
- These requests are routed to the sellers with appropriate GPUs and models, and computations are performed.
- Results are returned to the user interface.

### Detailed Steps
1. **User Registration and Wallet Integration**: Users register for the project and connect their Sui wallets.
2. **Visual Generation with AI**: Users log in, provide input for visual generation, and initiate the process.
3. **GPU Leasing**: Users select and lease an available GPU, paying the required amount of tokens.
4. **AI Computations**: The leased GPU performs the AI computations, and the results are returned to the user.
5. **NFT Creation**: Users convert the generated visuals into NFTs and record them on the Sui blockchain.
6. **Token Transfers**: GPU leasers earn tokens at the end of the leasing transaction.

### Technical Infrastructure and Requirements
- **Web and Mobile Development**: Any modern web development framework can be used.
- **AI Module**: Suitable frameworks (e.g., TensorFlow or PyTorch) can be used for the Stable Diffusion model.
- **Blockchain Integration**: Sui SDK or similar tools can be used for integrating with the Sui blockchain.
- **Backend and RPC Infrastructure**: Node.js or Python-based backend solutions can be used for managing RPC calls.
- **Database**: Databases like PostgreSQL or MongoDB can be used for storing user and transaction data.

Installation and Operation

### Frontend Installation

- Go to `frontend` folder in the project directory:
```bash
cd frontend
```

- Install the required dependencies:
```bash
npm install
```

- Run the application in development mode:
```bash
npm run dev
```

#### Backend Setup

- Go to `backend` folder in the project directory:
```bash
cd backend
```

- Install the required dependencies:
```bash
npm install
```

- Run the server:
```bash
node src/server.js
```

#### Distribution of Move Contracts

- Go to `contracts` folder and run deployment scripts:
```bash
cd contracts
./scripts/deploy_gpu_leasing.sh
./scripts/deploy_nft_creation.sh
```
### Start the Stable Diffusion Web UI

   ```bash
   cd stable-diffusion-webui
   ./webui.sh
   ```

2. **Start the Backend Server**
   ```bash
   cd backend
   node src/server.js
   ```

3. **Start the Frontend Application**
   ```bash
   cd frontend
   npm run dev
   ```

4. **Test the Integration**
   - Open the frontend application in your browser.
   - Register or log in.
   - Enter a text prompt and generate an image.
   - Verify that the generated image is displayed.

### References
For more detailed information and troubleshooting, refer to the [AUTOMATIC1111/stable-diffusion-webui GitHub repository](https://github.com/AUTOMATIC1111/stable-diffusion-webui) [oai_citation:1,GitHub - AUTOMATIC1111/stable-diffusion-webui: Stable Diffusion web UI](https://github.com/AUTOMATIC1111/stable-diffusion-webui) [oai_citation:2,GitHub - chenxiqiyuan/AUTOMATIC1111_stable-diffusion-webui: Stable Diffusion web UI](https://github.com/chenxiqiyuan/AUTOMATIC1111_stable-diffusion-webui) [oai_citation:3,AUTOMATIC1111/stable-diffusion-webui · Auto Wiki by Mutable.ai](https://wiki.mutable.ai/AUTOMATIC1111/stable-diffusion-webui).
