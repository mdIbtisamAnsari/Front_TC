import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import Login from './pages/jsx/Login.jsx';
import Home from './pages/jsx/Home.jsx';
import Register from './pages/jsx/Register.jsx'

import './App.css'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
