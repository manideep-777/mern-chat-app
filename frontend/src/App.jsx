import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route, Navigate } from "react-router-dom";
import { Loader } from "lucide-react";
import {Toaster,toast} from "react-hot-toast";

import HomePage from "./pages/HomePage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import { useAuthStore } from './store/useAuthStore';
import { useThemeStore } from './store/useThemeStore';


function App() {
  const {authUser, checkAuth, isCheckingAuth, onlineUsers, socket} = useAuthStore();
  const { theme } = useThemeStore();

  console.log(onlineUsers);

  useEffect(() => {
    if (!socket) return;
  
    const handleNotification = (senderId) => {
      console.log("Notification received from:", senderId);
      toast.success(`Received message from ${senderId}`);
    };
  
    socket.off("notification", handleNotification); // Remove old listener before adding a new one
    socket.on("notification", handleNotification);
  
    return () => {
      socket.off("notification", handleNotification); // Cleanup on unmount
    };
  }, [socket]); // Runs only when `socket` changes
  
  
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  
  // console.log(authUser);

  if(isCheckingAuth && !authUser) return (
    <div className="flex items-center justify-center h-screen">
       <Loader className="size-10 animate-spin" />
    </div>
  )



  return (
    <div data-theme={theme}>

      <Navbar />

      <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />

      </Routes>
      
      <Toaster /> 
    </div>
  )
}

export default App
