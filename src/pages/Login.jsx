import React, { useState } from 'react'
import './login.css'
import { loginUser } from "../api/login.api.js"


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    loginUser(email, password) 
  }

  return (
    <div className='formBody'>
      <h2>LogIn</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Regestered Email: </label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>
        <div>
          <label>Password: </label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login