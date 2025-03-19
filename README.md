# Express_js-Crud-with-mongo_db
# Express.js CRUD

## 📌 Project Overview
This is a **CRUD (Create, Read, Update, Delete) application** built with **Express.js** and **MongoDB**. It allows users to manage employee data with basic operations like adding, viewing, editing, and deleting employees.

## 🚀 Features
- View employee list
- Add new employees
- Edit existing employee details
- Delete employees
- Uses **MongoDB** as the database
- Template rendering with **EJS**
- Environment variables managed with **dotenv**

## 📂 Project Structure
```
EXPRESS_JS_CRUD/
│── models/          # Database models
│── public/          # Static assets (CSS, JS, images)
│── routes/          # Route handlers
│── views/           # EJS templates
│── .env             # Environment variables
│── .gitignore       # Git ignore file
│── app.js           # Main application file
│── package.json     # Project metadata and dependencies
│── package-lock.json# Dependency lock file
│── README.md        # Project documentation
```

## 🔧 Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file in the root directory and add:
```ini
MONGO_URL=mongodb+srv://your-username:your-password@cluster.mongodb.net/your-database
PORT=3000
```

### 4️⃣ Start the Server
```sh
npm start
```
Or, if using `nodemon`:
```sh
npx nodemon app.js
```

### 5️⃣ Open in Browser
- **http://127.0.0.1:3000/** → View Employees
- **http://127.0.0.1:3000/create** → Add Employee

## 🛠 Technologies Used
- **Node.js** & **Express.js** (Backend Framework)
- **MongoDB** (Database)
- **EJS** (Template Engine)
- **Mongoose** (MongoDB ODM)
- **dotenv** (Environment Variable Management)
- **Bootstrap/CSS** (Frontend Styling)

## 🤝 Contributing
Feel free to contribute! Fork the repo, make your changes, and submit a pull request.

## 📜 License
This project is open-source under the **MIT License**.

---
_Developed by [Naif Saleh]_

