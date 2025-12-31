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
              <img className='menu_icon' src={menu} />
              <span className='menu_items'>
                <div><Link to='/'>Home</Link></div>
                <div><Link to='/portal'>Portal</Link></div>
                <div><Link to='/profile'>Profile</Link></div>
                <div><Link to='/about'>About</Link></div>
              </span>
            </span>
        </span>
      </nav>
    </>
  )
}

export default NavBar