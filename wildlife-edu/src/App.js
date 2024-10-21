import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForumEvents from './pages/ForumEvents';
import Forum from './pages/Forum'; // Import Forum page
import AllEvents from './pages/AllEvents'; // Import All Events page
import Donate from './pages/Payment';
import Courses from './pages/Courses';
import PostRegister from './pages/PostRegister';
import NotFound from './pages/NotFound'; // Import NotFound page
import Payment from './pages/Donate';
import Settings from './pages/Settings'; // Settings component
import AddCourse from './pages/AddCourse';
import CourseDetail from './pages/CourseDetail';
import Pay from './pages/Pay';
import { signUp, login, addContactFormEntry } from './Firebase'; // Fix typo here

function App() {
  return (
    <Router>
      <Navbar />
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
        <Route path="/add-course" element={<AddCourse />} />
        <Route path="/course-detail" element={<CourseDetail />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all for undefined routes */}
      </Routes>
    </Router>
  );
}

export default App;
