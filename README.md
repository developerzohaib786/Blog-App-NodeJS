# Blog App - Node.js 📝🚀  

A simple and dynamic **Blog Application** built with **Node.js, Express, MongoDB, and EJS**. This app allows users to create, read, update, and delete blog posts with user authentication and comment functionality.  

---

## 📌 Features  
✅ **User Authentication** (Signup, Login, Logout)  
✅ **Create, Read, Update, Delete (CRUD) Blogs**  
✅ **Comment System**  
✅ **EJS Templating for Frontend**  
✅ **MongoDB Database with Mongoose**  
✅ **File Uploads for Blog Cover Images**  
✅ **Responsive UI with Bootstrap**  

---

## 💂️ Project Structure
```
Blog-App-NodeJS/
│— public/                 # Static files (CSS, images, uploads)
│— views/                  # EJS templates
│— routes/                 # Route handlers (user, blog)
│— models/                 # Mongoose models (User, Blog, Comment)
│— middlewares/            # Authentication middleware
│— controllers/            # Controllers for logic
│— app.js                  # Main Express application
│— package.json            # Dependencies & scripts
│— README.md               # Project Documentation
```

---

## 🛠 Installation & Setup  

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/developerzohaib786/Blog-App-NodeJS.git
cd Blog-App-NodeJS
```

### 2️⃣ Install Dependencies  
```sh
npm install
```

### 3️⃣ Start MongoDB (Make sure MongoDB is running)  
```sh
mongod
```

### 4️⃣ Run the App  
```sh
node app.js
```
🚀 **Server running on:** `http://localhost:8000/`

---

## 🔑 Environment Variables
Create a `.env` file in the root directory and configure:  
```
PORT=8000
MONGO_URI=mongodb://localhost:27017/blogDB
SESSION_SECRET=your_secret_key
```

---

## 📸 Screenshots
| Home Page | Blog Page |
|-----------|-----------|
| ![Home Page](public/images/home_screenshot.png) | ![Blog Page](public/images/blog_screenshot.png) |

---

## 🤝 Contributing
Contributions are welcome! Feel free to fork the repository, create a feature branch, and submit a pull request.  

---

## 🐜 License
This project is licensed under the **MIT License**.  

---

## 👨‍💻 Author
Developed by **Zohaib Irshad** 🚀  
📚 **GitHub**: [developerzohaib786](https://github.com/developerzohaib786)  
