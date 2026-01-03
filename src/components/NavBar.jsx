import logo from '../assets/logo.png';
import { useState, useEffect } from 'react';
import menu from '../assets/menu.svg';
import './navbar.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios'

axios.defaults.withCredentials = true


const NavBar = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState()

  useEffect(() => {
    const currentUser = async () => {
      const response = await axios.get('http://localhost:3000/api/v1/users/userdetails')
        .then((response) => {
          setUser(response.data.data)
        })
        .catch(async (err) => {
          await axios.post('http://localhost:3000/api/v1/users/getaccesstoken')
            .then(async () => {
              const userResponse = await axios.get('http://localhost:3000/api/v1/users/userdetails')
                .then((userResponse) => {
                  setUser(userResponse.data.data)
                })
            })
        })
    }
    currentUser()
  }, [])

  useEffect(() => {
    const menuLinks = document.querySelectorAll('.menu_items_link')
    const handleMenuClick = () => {
      document.getElementById('checkBox').checked = false
    }
    
    menuLinks.forEach(link => {
      link.addEventListener('click', handleMenuClick)
    })
    
    return () => {
      menuLinks.forEach(link => {
        link.removeEventListener('click', handleMenuClick)
      })
    }
  }, [])


  return (
    <>
      <nav className='navbar'>
        <span className='navbar-logo-title'>
          <Link to='/' className='navbar-logo-link'>
            <img className='logo' src={logo} />
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
          {user ? (
            <>
              <span className='userName'>{user?.userName}</span>
              <img className='profile_photo' src={user?.profilePhoto} alt='profile_photo' />
            </>
          ) :
            (<div className="new_user">
              <Link to='/login' className='navbar-link'>Login</Link>
              <Link to='/register' className='navbar-link'>Signup</Link>
            </div>
            )}
          <span className='menu'>
            <input type="checkbox" style={{display: 'none'}} id="checkBox" />
            <label htmlFor="checkBox"><img className='menu_icon' src={menu} /></label>
            <label htmlFor="checkBox" id="overlay" ></label>
            <span className='menu_items'>
              <Link to='/' className='menu_items_link'>Home</Link>
              <Link to='/portal' className='menu_items_link'>Portal</Link>
              <Link to='/profile' className='menu_items_link'>Profile</Link>
              <Link to='/about' className='menu_items_link'>About</Link>
              <img className='items_logo' src={logo} />
            </span>
          </span>
        </span>
      </nav>
      <label htmlFor="checkBox" id="overlay" ></label>
    </>
  )
}

export default NavBar