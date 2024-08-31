# Military Supply Chain Management Using Blockchain Technology

## Project Overview
This project implements a dynamic, Ethereum-based decentralized application (DApp) 
designed to enhance the Supply Chain Operations of the Indian Army's Army Service 
Corps. Leveraging blockchain technology, the system aims to improve transparency, 
efficiency, and security in military supply chain management.

## Supply Chain Roles

The project simulates the entire supply chain process through four distinct roles:

1. **Units**: 
   - Represent the ground-level military units
   - Generate initial supply requests
   - Submit requirements into the system

2. **Divisions**: 
   - Act as intermediaries between Units and ASC
   - Review and approve requests from Units
   - Forward approved requests to ASC

3. **Army Service Corps (ASC)**: 
   - Central supply management entity
   - Receive approved requests from Divisions
   - Coordinate with Manufacturers for supply fulfillment

4. **Manufacturer**: 
   - External suppliers or production facilities
   - Receive production orders from ASC
   - Fulfill supply requests and update the chain

Each role interacts with the blockchain to ensure transparent and secure tracking 
of all supply chain activities.

### Process Flow
![Project Process Flow](https://github.com/user-attachments/assets/9c5022e8-bf39-4f5b-80cd-175c509d8a0f)

## Key Features
- Blockchain-based supply chain management
- Role-based access (Units, Divisions, ASC, Manufacturer)
- Secure authentication with OTP verification
- Transaction tracking on Ethereum blockchain
- MetaMask integration for Ethereum transactions

## User Interface and Functionality
> **Note**: Only a few screenshots are provided to give a brief understanding of 
> the project features and its working.

### Authentication Flow

#### Login Page
Users can log in with their credentials to access the system.

![Login Page](https://github.com/user-attachments/assets/d24196fd-503a-408f-b5b3-0b77dd1f1295)

#### OTP Verification
After entering valid login credentials, users must verify their identity through OTP.

![OTP Verification](https://github.com/user-attachments/assets/2c7fd427-7fce-4f76-a7fc-fa2cfa3be2fc)

### Request Generation (Units)

#### Request Page
Units can generate supply requests by filling in details and initiating a 
blockchain transaction.

![Request Page](https://github.com/user-attachments/assets/cd391c29-5fa2-4ca6-b06f-064733d1775a)

#### Operation Success Confirmation
Confirmation of successful request generation and blockchain transaction.

![Operation Success](https://github.com/user-attachments/assets/eee7bf98-e0d9-489b-aedb-d95931bba8b3)

### Blockchain Integration

#### MetaMask Wallet
MetaMask is used for managing Ethereum transactions and accounts.

![MetaMask Wallet](https://github.com/user-attachments/assets/9e59f4b1-bc99-438e-ace3-8bb6838ff1bb)

#### Ganache - Local Blockchain
Ganache provides a local Ethereum blockchain for development and testing.

![Ganache](https://github.com/user-attachments/assets/9a98459e-60a2-4cc4-a2a2-87f05acd02db)

### Common Features for All Roles

#### Received Requests Page
Displays requests received from other units, with options to accept or reject.

![Received Requests](https://github.com/user-attachments/assets/48c39355-fc4c-4931-b769-936d61bb62f2)

#### All Requests Page
Shows all requests posted and received by the current role.

![All Requests](https://github.com/user-attachments/assets/c9bfb50d-6876-4b5b-97b9-a299ddf5db02)

#### Transactions Page
Displays all transactions with necessary details for tracking and auditing.

![Transactions Page](https://github.com/user-attachments/assets/f3474206-3c7a-43d8-9c0a-f49b8daa5574)

## Technology Stack
- MERN (MongoDB, Express.js, React.js, Node.js)
- Ethereum
- Solidity
- JavaScript
- HTML5
- CSS3
- Ganache
- MetaMask
- Firebase (for authentication)

## Getting Started

### Prerequisites
- Node.js and npm
- Ganache (for local blockchain)
- MetaMask browser extension

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/your-username/military-supply-chain.git
   ```
2. Install dependencies:
   ```
   cd military-supply-chain
   npm install
   ```
3. Set up Ganache and MetaMask:
   - Start Ganache to run a local Ethereum blockchain
   - Configure MetaMask to connect to your Ganache instance
4. Run the application:
   ```
   npm start
   ```
   
## Demo
For a comprehensive walkthrough of the project, check out our 
[Project Demo Video](https://youtu.be/oY0Wv6KKJI0?si=MKdOgtdjKDKtH8re).

---

Developed with ❤️ for enhancing military logistics efficiency and transparency.

### Contact
If you have any questions or suggestions, feel free to reach out!

---
**Thank you for your interest in our Military Supply Chain Management project!**
