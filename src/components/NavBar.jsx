import logo from '../assets/logo.png'
import menu from '../assets/menu.svg'
import './navbar.css'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
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
          to='/about' 
          className={({ isActive }) => isActive ? 'navbar-link-active' : 'navbar-link'}
        >
          About
        </NavLink>
        <NavLink 
          to='/contact' 
          className={({ isActive }) => isActive ? 'navbar-link-active' : 'navbar-link'}
        >
          Contact
        </NavLink>
        <NavLink 
          to='/login' 
          className={({ isActive }) => isActive ? 'navbar-link-active' : 'navbar-link'}
        >
          Login
        </NavLink>
      </span>
     </nav>
    </>
  )
}

export default NavBar