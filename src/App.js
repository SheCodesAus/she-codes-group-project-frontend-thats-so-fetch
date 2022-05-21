import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

// Components
import Navbar from "./components/Navbar/Navbar";

// Styles
import './App.css';

// Pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MentorsPage from "./pages/MentorsPage";
import NewsPage from "./pages/NewsPage";
import ProfilePage from "./pages/ProfilePage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/mentors" element={<MentorsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
