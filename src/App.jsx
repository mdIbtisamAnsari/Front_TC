import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import Login from './pages/jsx/Login.jsx';
import Home from './pages/jsx/Home.jsx';
import Register from './pages/jsx/Register.jsx';
import StudentProfile from './pages/jsx/StudentProfile.jsx';
import TeacherProfile from './pages/jsx/TeacherProfile.jsx';
import './App.css';
import { useUser } from './hooks/useUser.js';


function App() {
  const { user } = useUser();

  return (
    <>
      <Navbar user={user}/>
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/login" element={<Login user={user} />} />
        <Route path="/register" element={<Register user={user} />} />
        <Route path="/profile" element={!user ? <Navigate to="/login" replace /> : (user.role === 'student' ? <StudentProfile user={user} /> : <TeacherProfile user={user} />)} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
