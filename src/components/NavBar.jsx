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