# ✨ Full Stack Realtime Chat App ✨

## 🚀 Demo
[Live Demo](https://mern-chat-app-zq9u.onrender.com)

## 📺 Video Tutorial
Built by following a YouTube tutorial.

## 🛠 Tech Stack
- **MERN (MongoDB, Express, React, Node.js)**
- **Socket.io** for real-time messaging
- **TailwindCSS & Daisy UI** for UI design
- **Zustand** for global state management
- **JWT (JSON Web Token)** for authentication & authorization
- **Cloudinary** for media storage
- **Render** for deployment

## 🌟 Features
- 🔐 **Authentication & Authorization** with JWT
- 💬 **Real-time messaging** using Socket.io
- 🟢 **Online user status** tracking
- ⚡ **Global state management** with Zustand
- 🛠 **Error handling** on both server & client
- 📦 **Free deployment** like a pro!

## 🏗 Setup & Installation

### 1️⃣ Clone the repository
```sh
git clone <your-repo-link>
cd mern-realtime-chat
```

### 2️⃣ Install dependencies
```sh
npm install
cd client && npm install
```

### 3️⃣ Configure environment variables
Create a `.env` file in the root directory and add:
```
MONGODB_URI=your_mongodb_connection_string
PORT=5001
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

NODE_ENV=development
```

### 4️⃣ Start the app
```sh
npm run dev   # Runs both client & server
```

### 5️⃣ Build for production
```sh
npm run build
npm start
```

## 🚀 Deployment
Deployed on **Render**: [Live App](https://mern-chat-app-zq9u.onrender.com)

## 🤝 Contributing
Feel free to fork the project and submit pull requests!

## 📜 License
This project is open-source and available under the MIT License.

