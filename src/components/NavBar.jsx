import logo from '../assets/logo.png';
import { useState, useEffect } from 'react';
import menu from '../assets/menu.svg';
import './navbar.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios'

axios.defaults.withCredentials = true

const NavBar = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const currentUser = async () => {
      const response = await axios.get('http://localhost:3000/api/v1/users/userdetails')
      .then((response) => { 
        return response.data
      })
      .catch(async(err) => { 
        const response2 = await axios.post('http://localhost:3000/api/v1/users/getaccesstoken')
        .then(async (response2) => {
          const userResponse = await axios.get('http://localhost:3000/api/v1/users/userdetails')
          return userResponse.data
        })
        .catch((err) => {
          navigate('/login')
        })
      })
    } 
    currentUser()
  }, [])

  return (
    <>
     <nav className='navbar'>
      <span className='navbar-logo-title'>
        <Link to='/' className='navbar-logo-link'>
          <img className='logo' src={logo}/>
          <span className='title'>TuteConnect</span>
        </Link>
      </span>
      <span className='navbar-links-container'>
        <NavLink 
          to='/' 
          className={({ isActive }) => isActive ? 'navbar-link-active' : 'navbar-link'}
        >
          Home
        </NavLink>
        <NavLink 
          to='/portal' 
          className={({ isActive }) => isActive ? 'navbar-link-active' : 'navbar-link'}
        >
          Portal
        </NavLink>
        <NavLink 
          to='/profile' 
          className={({ isActive }) => isActive ? 'navbar-link-active' : 'navbar-link'}
        >
          Profile
        </NavLink>
        <NavLink 
          to='/about' 
          className={({ isActive }) => isActive ? 'navbar-link-active' : 'navbar-link'}
        >
          About
        </NavLink>
      </span>
      <span className='navbar_profile'>
        
      </span>
     </nav>
    </>
  )
}

export default NavBar