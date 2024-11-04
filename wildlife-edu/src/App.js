// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForumEvents from './pages/ForumEvents';
import Forum from './pages/Forum'; 
import AllEvents from './pages/AllEvents'; 
import Donate from './pages/Payment';
import Courses from './pages/Courses';
import PostRegister from './pages/PostRegister';
import NotFound from './pages/NotFound'; 
import Payment from './pages/Donate';
import Settings from './pages/Settings'; 
import Pay from './pages/Pay';
import Course1 from './pages/Course1';

function App() {
  return (
    <Router>
      <div className="app-container"> {/* Makes full viewport height */}
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forum-events" element={<ForumEvents />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/all-events" element={<AllEvents />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/post-register" element={<PostRegister />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/pay" element={<Pay />} />
            <Route path="/course1" element={<Course1 />} />
            <Route path="*" element={<NotFound />} /> {/* Catch-all for undefined routes */}
          </Routes>
        </div>
        <Footer /> {/* Footer placed outside of main content */}
      </div>
    </Router>
  );
}

export default App;
