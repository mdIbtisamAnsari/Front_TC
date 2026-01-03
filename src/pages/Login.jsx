import React, { useState } from 'react'
import './login.css'
import { loginUser } from "../api/login.api.js"
import {useNavigate} from 'react-router-dom'


const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async(e) => {
    e.preventDefault()
    await loginUser(email, password)
    await navigate('/')
    window.location.reload()
  }

  return (
    <div className='login-container'>
      <div className='formBody'>
        <h2>Welcome Back</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label>Email Address</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required 
            />
          </div>
          <div className='form-group'>
            <label>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required 
            />
          </div>
          <button type="submit" className='login-btn'>Sign In</button>
        </form>
      </div>
    </div>
  )
}

export default Login