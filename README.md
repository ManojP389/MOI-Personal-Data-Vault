# MOI Personal Data Vault  
Participant-Centric Identity Management System

---

## Project Overview  
MOI Personal Data Vault is a participant-centric application that enables users to own, manage, and selectively share their personal data such as skills and certifications.

Unlike traditional systems where platforms control user data, this project demonstrates how MOI’s participant-centric architecture allows users to fully control their own state and interactions.

---

## Problem Statement  

Current platforms like LinkedIn and resumes suffer from:

- Centralized control over user data  
- No fine-grained control over data sharing  
- Risk of data manipulation or misrepresentation  
- Lack of true digital ownership  

---

## Approach  

We developed a Personal Data Vault where:

- Each user maintains their own data vault (state)  
- Users can add skills and certifications  
- Users control what data is shared  
- Recruiters can only view selected/shared data  

---

## How Participant-Centric State is Used  

This project uses MOI’s participant-centric state model:

- Each participant owns their individual state  
- No centralized database or contract stores user data  
- State updates happen per participant through interactions  
- Access permissions control data visibility  

### Implementation Details

- **Cocolang Logic (`vault.coco`)**  
  Defines participant state, permissions, and interactions  

- **Frontend (React.js)**  
  Interface for managing data and sharing controls  

- **Backend / Scripts**  
  Node.js (`app.js`, `rpc.js`) used for MOI Devnet RPC interaction  

---

## Architecture  

### Traditional System
User → Server → Database  

### MOI-Based System
User → Own State (Vault) → Controlled Sharing → Recruiter View  

---

## Features  

- Add skills  
- Add certificates  
- Selective data sharing  
- Restricted recruiter view  
- User-controlled data ownership  

---

## Demo Flow  

1. Add a skill (e.g., Blockchain)  
2. Add a certificate (e.g., AWS Certified)  
3. Select what data to share  
4. Generate share view  
5. Recruiter sees only selected data  

---


---

## Setup and Run Instructions  

### 1. Clone Repository 
git clone <your-repo-link>
cd moi_vault
### 2.Install Dependencies
cd frontend
npm install
### 3. Run Application
npm start

```
### Project Structure
moi_vault/
├── logic/
│   └── vault.coco
├── scripts/
│   ├── app.js
│   └── rpc.js
├── frontend/
├── vault.manifest.json
└── README.md

### Deployment Notes
Cocolang logic implemented in vault.coco
Deployment attempted using Voyage Explorer
Full deployment via manifest/UI not completed due to tooling limitations
RPC-based interaction tested using MOI Devnet

### TechStack
React.js
Node.js
Cocolang (MOI logic)
MOI Devnet RPC

### Future Improvements
Integration with official MOI SDK
Certificate verification system
Reputation scoring
Full deployment support

### Team
P.Manoj Kumar
