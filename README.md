# 🎟️ Ticket Booking and Event Management System

A full-stack web application that allows users to discover events, book tickets, and manage event operations seamlessly. This project is built using the MERN stack and includes features like secure booking, QR-based e-tickets, and email notifications.

---

## 🚀 Features

### 👤 User (Attendee)

* Browse and search events (by date, location, category)
* Book tickets in real-time
* Receive QR-code e-ticket via email
* View booking history

### 🧑‍💼 Organizer

* Create and manage events
* Define ticket categories (General, VIP, etc.)
* Track bookings and availability
* Validate tickets using QR codes

### 🛠️ Admin

* Manage users and events
* Monitor platform activity
* Handle bookings and reports

---

## 🧠 Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **Authentication:** JWT
* **Email Service:** Nodemailer
* **QR Code:** qrcode package
* **Other Tools:** VS Code, Postman, Git

---

## 📁 Project Structure

```
mini project/
│── config/
│     └── db.js
│
├── controllers/
│     ├── authController.js
│     ├── bookingController.js
│     └── eventController.js
│
├── middleware/
│     ├── authMiddleware.js
│     └── roleMiddleware.js
│
├── models/
│     ├── user.js
│     ├── event.js
│     └── booking.js
│
├── routes/
│     ├── authRoutes.js
│     ├── bookingRoutes.js
│     └── eventRoutes.js
│
├── utils/
│     ├── email.js
│     └── qr.js
│
├── .env
├── package.json
└── server.js
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```
git clone https://github.com/your-username/ticket-booking-system.git
cd ticket-booking-system
```

---

### 2️⃣ Install Dependencies

```
npm install
```

---

### 3️⃣ Create `.env` File

Create a `.env` file in the root directory and add:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

EMAIL=your_email@gmail.com
PASSWORD=your_app_password
```

---

### 4️⃣ Run the Server

```
node server.js
```

OR

```
npm start
```

---

### ✅ Expected Output

```
MongoDB Connected
Server running on port 5000
```

---

## 🧪 API Testing (Postman)

### 🔐 Auth Routes

* `POST /api/auth/register`
* `POST /api/auth/login`

### 🎟️ Event Routes

* `POST /api/events` (protected)
* `GET /api/events`

### 🧾 Booking Routes

* `POST /api/bookings` (protected)

---

## 🔐 Authentication

* Uses JWT tokens
* Add token in headers:

```
Authorization: Bearer YOUR_TOKEN
```

---

## 📧 Email Setup (Important)

To enable email functionality:

1. Enable **2-Step Verification** in Gmail
2. Generate **App Password**
3. Use that password in `.env`

---

## ⚠️ Common Issues & Fixes

### ❌ MongoDB not connecting

* Check `MONGO_URI` in `.env`

### ❌ Email not sending

* Use Gmail App Password (not normal password)

### ❌ Module errors

* Run `npm install` again

---

## 🧠 Key Concepts Used

* REST API design
* MVC architecture
* JWT authentication
* MongoDB transactions
* QR code generation
* Email integration

---

## 📌 Future Improvements

* Payment integration (Stripe/Razorpay)
* Frontend UI (React)
* Admin analytics dashboard
* Ticket scanning system

---

## 👨‍💻 Author

* Preet Kumar Singh
* B.Tech CSE

---

## ⭐ Acknowledgment

This project was developed as part of a college mini project to demonstrate full-stack development skills and real-world application design.

---

## 📜 License

This project is open-source and free to use for educational purposes.
