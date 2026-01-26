import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import Login from './pages/jsx/Login.jsx';
import Home from './pages/jsx/Home.jsx';
import Register from './pages/jsx/Register.jsx';
import CreateStudentPost from './pages/jsx/CreateStudentPost.jsx';
import StudentProfile from './pages/jsx/StudentProfile.jsx';
import TeacherProfile from './pages/jsx/TeacherProfile.jsx';
import Loading from './components/Loading.jsx';
import './App.css';
import { useUser } from './hooks/useUser.js';


function App() {
  const { user, loading } = useUser();

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar user={user}/>
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/login" element={<Login user={user} />} />
        <Route path="/register" element={<Register user={user} />} />
        <Route path="/profile" element={!user ? <Navigate to="/login" replace /> : (user.role === 'student' ? <StudentProfile user={user} /> : <TeacherProfile user={user} />)} />
        <Route path="/createpost" element={!user ? <Navigate to="/login" replace /> : (user.role === 'student' ? <CreateStudentPost user={user} /> : <__________ user={user} />)} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
