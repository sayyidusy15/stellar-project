# 🚀 Stellar Todo DApp (Soroban Submission)

Hello, I'm **Sayyidusy Syauqi Al Ghiffari**! This is a **Decentralized Application (dApp)** built on the **Stellar** network as a submission for the Stellar Workshop. This application is more than just a simple to-do list; it's a practical implementation of Stellar's smart contract platform, **Soroban**.

---

## 📸 App Preview
![App Preview](frontend/public/app.jpeg)

*User Interface (UI) built with Next.js*

---

## 🛠 Project Highlights

In this project, I have integrated several core concepts from the Web3 and Blockchain ecosystem:

### 1. Soroban Smart Contracts
The core logic of this application (adding and removing tasks) does not run on a traditional database server. Instead, it operates within a **Smart Contract** built on **Soroban**, Stellar's smart contract platform. Task data is stored in *persistent storage* on the Stellar network.

### 2. Why Rust?
The smart contract is written in **Rust**. Rust was chosen for its:
- **Security:** It prevents many common memory-related bugs.
- **Efficiency:** It compiles to WebAssembly (WASM), making it extremely lightweight and fast for blockchain execution.

### 3. Web3 & Blockchain Concepts
- **Decentralization:** Task data is not controlled by a single central entity but is distributed across the Stellar ledger.
- **Wallet Connection:** The app is designed to connect with the **Freighter Wallet** for user identity (Self-custody).
- **On-chain Action:** Every time a task is added, a transaction is sent and validated by the network.

---

## 🌐 Deployment Information

To fulfill the submission requirements, here are the deployment details on the **Stellar Testnet**:

- **Contract ID:** `CCVKYKAG6UDTO536MYIRF2GJGV2L4UHUXHCMKG36BHLXOPUWCNIX72FP`
- **Network:** Stellar Testnet
- **Explorer:** [Stellar Expert (Testnet)](https://stellar.expert/explorer/testnet)

> **Note:** Replace the Contract ID above with the actual ID obtained after running the `stellar contract deploy` command.

---

## 🏗 Project Structure

The project is divided into two main parts:
1.  **/contracts**: Contains the Rust smart contract code that manages CRUD (Create, Read, Update, Delete) task logic on the blockchain.
2.  **/frontend**: A user interface built with **Next.js** and **Tailwind CSS**, designed with a minimalist and professional look to focus on technical performance.

---

## 🚀 How to Run Locally

### Prerequisites
- Rust & Cargo
- Target `wasm32-unknown-unknown`
- Node.js & npm
- Stellar CLI (for contract deployment)

### 1. Smart Contract (Backend)
Navigate to the contract folder and run tests to ensure logic correctness:
```bash
cd contracts/todo
cargo test
```

### 2. Frontend
Navigate to the frontend folder and start the local development server:
```bash
cd frontend
npm install
npm run dev
```
Access the app at `http://localhost:3000`.

---

## 📝 Additional Notes
This project focuses on code clarity and understanding the data flow from the Smart Contract to the Frontend. The UI features intentional "sharp edges" and a minimalist aesthetic to maintain a professional utility-focused feel.

---
**Submitted by:** [Your Name / Sayyidusy Syauqi Al Ghiffari]
*Built for the Stellar/Soroban dApp Development Workshop 2026.*

