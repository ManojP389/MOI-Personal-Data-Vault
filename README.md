# MOI Personal Data Vault

## Overview

MOI Personal Data Vault is a participant-centric application that enables users to own, manage, and selectively share their personal data such as skills and certifications.

Unlike traditional systems where platforms control user data, this project demonstrates how MOI’s participant-centric architecture allows users to fully control their own state and interactions.

---

## Problem Statement

* User data is controlled by centralized platforms such as LinkedIn and resumes
* No fine-grained control over what information is shared
* Data can be manipulated or misrepresented
* Users do not truly own their digital identity

---

## Solution

We built a Personal Data Vault where:

* Each user stores their own data (skills, certificates)
* Users control what data to share
* Only selected data is visible to others (for example, recruiters)

---

## Features

* Add skills
* Add certificates
* Selective data sharing
* Restricted recruiter view
* Clean user interface

---

## How MOI is Used

This project is based on MOI’s participant-centric state model:

* Data is owned by the participant (user)
* State is not stored in a central contract
* Interactions update user-specific state
* Permissions control data visibility

We implemented:

* Cocolang logic (`vault.coco`) to define participant state and interactions
* A working frontend prototype to simulate participant-centric behavior

---

## Project Structure

moi_vault/
├── logic/
│    └── vault.coco
├── scripts/
│    ├── app.js
│    └── rpc.js
├── frontend/
├── vault.manifest.json
└── README.md

---

## How to Run the Project

### 1. Clone the repository

git clone <your-repo-link>
cd moi_vault

### 2. Run frontend

cd frontend
npm install
npm start

Open http://localhost:3000 in your browser.

---

## Demo Flow

1. Add a skill (e.g., Blockchain)
2. Add a certificate (e.g., AWS Certified)
3. Select what to share
4. Generate share
5. View recruiter output

Only selected data is visible.

---

## Deployment Notes

* Cocolang logic was implemented in `vault.coco`
* Deployment was attempted using Voyage Explorer
* Due to current tooling limitations, full deployment via UI/manifest was not successful
* RPC-based interaction was explored using MOI devnet

---

## Tech Stack

* React.js
* Node.js
* Cocolang (MOI logic)
* MOI Devnet RPC

---

## Team

Manoj Kumar P.

---

## Future Improvements

* Real deployment using official MOI tooling
* Integration with MOI SDK
* Verification system (trusted issuers)
* Reputation scoring

---

## Conclusion

This project demonstrates how participant-centric architecture can enable true data ownership, secure sharing, and identity-aware interactions in decentralized applications.
