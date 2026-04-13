# 🎟️ Ticket Booking and Event Management System

A full-stack MERN web application that enables users to discover events, book tickets, and manage event operations. The system includes a modern React frontend and a scalable Node.js backend with QR-based ticketing and email notifications.

---

## 🚀 Features

### 👤 User (Attendee)

* Browse events (movies, categories, etc.)
* Select seats and book tickets
* Receive QR-code e-ticket via email
* View booking details

### 🧑‍💼 Organizer

* Create and manage events
* Control seat availability and pricing

### 🛠️ Admin

* Manage users and events
* Monitor bookings

---

## 🧠 Tech Stack

### 🔹 Frontend

* React.js (Vite)
* Tailwind CSS
* Component-based architecture

### 🔹 Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* Nodemailer (Email)
* QR Code generation

---

## 📁 Project Structure

### 🔹 Backend

```id="b1"
mini project/
│── config/
│     └── db.js
├── controllers/
├── middleware/
├── models/
├── routes/
├── utils/
├── .env
├── package.json
└── server.js
```

---

### 🔹 Frontend

```id="b2"
ticket-booking-frontend/
│── public/
│── src/
│     ├── assets/
│     ├── components/
│     │     ├── Navbar.jsx
│     │     ├── Banner.jsx
│     │     ├── Categories.jsx
│     │     ├── Movies.jsx
│     │     ├── SeatSelection.jsx
│     │     └── about.jsx
│     ├── pages/
│     │     └── Home.jsx
│     ├── App.jsx
│     ├── App.css
│     ├── index.css
│     └── main.jsx
│── index.html
│── package.json
│── tailwind.config.js
│── vite.config.js
```

---

## ⚙️ Setup Instructions

---

## 🔧 Backend Setup

### 1️⃣ Navigate to backend

```id="b3"
cd mini-project
```

### 2️⃣ Install dependencies

```id="b4"
npm install
```

### 3️⃣ Create `.env`

```id="b5"
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=secret123

EMAIL=your_email@gmail.com
PASSWORD=your_app_password
```

### 4️⃣ Run backend

```id="b6"
node server.js
```

---

## 🎨 Frontend Setup

### 1️⃣ Navigate to frontend

```id="b7"
cd ticket-booking-frontend
```

### 2️⃣ Install dependencies

```id="b8"
npm install
```

### 3️⃣ Run frontend

```id="b9"
npm run dev
```

---

## 🌐 Application URLs

* Frontend → http://localhost:5173
* Backend → http://localhost:5000

---

## 🔐 Authentication

* JWT-based authentication
* Use token in headers:

```id="b10"
Authorization: Bearer YOUR_TOKEN
```

---

## 📧 Email Configuration

To enable email (QR ticket):

1. Enable Gmail 2-Step Verification
2. Generate App Password
3. Add in `.env`

---

## 🧪 API Endpoints

### Auth

* POST `/api/auth/register`
* POST `/api/auth/login`

### Events

* GET `/api/events`
* POST `/api/events`

### Booking

* POST `/api/bookings`

---

## ⚠️ Common Issues

* MongoDB not connecting → check `MONGO_URI`
* Email not working → use App Password
* Server not starting → check `db.js`

---

## 🧠 Key Concepts

* REST API
* MVC Architecture
* JWT Authentication
* MongoDB Integration
* QR Code Ticket System
* Email Automation

---

## 📌 Future Improvements

* Payment integration (Stripe/Razorpay)
* Admin dashboard
* Live seat availability
* QR scanner system
  
---

## ⭐ Note

This project is built as a college mini project and demonstrates real-world full-stack development with scalable backend architecture and modern frontend design.

---

## 📜 License

Free to use for educational purposes.
