# HireNest – Job Search Portal

HireNest is a full-stack job search platform designed to help users discover job opportunities and allow recruiters to post job listings. The project focuses primarily on backend engineering while providing a clean and minimal frontend interface for users to interact with the system.

The platform allows job seekers to browse available jobs, view job details, and apply for positions, while recruiters can post and manage job listings. The project is built using the MERN stack (MongoDB, Express.js, React, and Node.js).

---

## Project Objective

The goal of HireNest is to demonstrate the implementation of a scalable backend system that supports a job portal. The frontend serves as a simple interface to interact with backend APIs while the backend handles authentication, job management, and application tracking.

---

## Features

### User Features

* User registration and login
* Browse available job listings
* Search jobs by title or location
* View detailed job descriptions
* Apply for jobs
* Save jobs for later
* View application status in the dashboard

### Recruiter Features

* Recruiter account registration
* Post new job listings
* Manage job postings

### General Features

* Authentication system (Login / Signup / Logout)
* Responsive and clean UI
* Job search and filtering
* Dashboard for user activity
* RESTful API integration

---

## Tech Stack

### Frontend

* React
* React Router
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Other Tools

* Git & GitHub
* Postman (API testing)

---

## Project Structure

### Frontend

```
hirenest-frontend
│
├── public
│
├── src
│   ├── components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── JobCard.jsx
│   │   ├── SearchBar.jsx
│   │   └── ProtectedRoute.jsx
│   │
│   ├── pages
│   │   ├── Home.jsx
│   │   ├── Jobs.jsx
│   │   ├── JobDetails.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Dashboard.jsx
│   │   └── PostJob.jsx
│   │
│   ├── services
│   │   └── api.js
│   │
│   ├── context
│   │   └── AuthContext.jsx
│   │
│   ├── data
│   │   └── dummyJobs.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
└── package.json
```

---

## Installation and Setup

### 1. Clone the Repository

```
git clone https://github.com/yourusername/hirenest.git
cd hirenest
```

---

### 2. Setup Frontend

Navigate to the frontend folder:

```
cd hirenest-frontend
```

Install dependencies:

```
npm install
```

Start the development server:

```
npm run dev
```

The frontend will run on:

```
http://localhost:5173
```

---

### 3. Setup Backend

Navigate to backend folder:

```
cd hirenest-backend
```

Install dependencies:

```
npm install
```

Create a `.env` file and configure the following variables:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the server:

```
npm run dev
```

Backend runs on:

```
http://localhost:5000
```

---

## API Endpoints

### Authentication

```
POST /api/auth/signup
POST /api/auth/login
POST /api/auth/logout
```

### Jobs

```
GET /api/jobs
GET /api/jobs/:id
POST /api/jobs
DELETE /api/jobs/:id
```

### Applications

```
POST /api/apply
GET /api/user/applications
```

---

## Future Improvements

* Resume upload functionality
* Advanced job filtering
* Email notifications
* Admin dashboard
* Job recommendation system
* Deployment using Docker and cloud platforms

## License

This project is licensed under MIT License
