# Website Idea Generator

A full-stack project using **Next.js** (frontend), **NestJS** (backend), and **MongoDB**. Users can submit website ideas, which are stored in MongoDB and previewed with generated dummy sections.

---

## Features
- Simple form to submit website ideas
- Backend API returns 3 dummy sections ("Hero", "About", "Contact")
- Ideas and sections are stored in MongoDB
- All stored ideas are previewed in the frontend
- Loading and error handling included

---

## Prerequisites
- Node.js (v18+ recommended)
- npm
- MongoDB (running locally or accessible remotely)

---

## Setup Instructions

### 1. **Clone the repository**
```
git clone <your-repo-url>
cd <project-root>
```

### 2. **Backend Setup (NestJS)**
```bash
cd backend
npm install
```
- Make sure MongoDB is running (default: `mongodb://localhost:27017/website_ideas`).
- Enable CORS in `src/main.ts` if accessing from a different frontend port:
  ```ts
  app.enableCors();
  ```
- Start the backend:
```bash
npm run start:dev
```
- The backend runs on [http://localhost:3000](http://localhost:3000) (or change the port in `main.ts`).

### 3. **Frontend Setup (Next.js)**
```bash
cd ../frontend
npm install
npm run dev
```
- The frontend runs on [http://localhost:3000](http://localhost:3000) by default.
- If backend and frontend are on the same port, change one (e.g., backend to 4000) and update the fetch URLs in `frontend/app/page.tsx`.

---

## Usage
1. Open the frontend in your browser.
2. Enter a website idea and submit.
3. See all stored ideas and their generated sections in the preview list.

---

## Notes
- Ensure MongoDB is running before starting the backend.
- If you encounter CORS or port issues, adjust the backend port and CORS settings as needed.
- For production, use environment variables for sensitive configs (MongoDB URI, ports, etc).