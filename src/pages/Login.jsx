import { useState } from 'react'
import './login.css'
import { loginUser } from "../api/login.api.js"
import { useNavigate } from 'react-router-dom'
import { GrView } from "react-icons/gr";
import { GrHide } from "react-icons/gr";


const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await loginUser(email, password)
    await navigate('/')
    window.location.reload()
  }

  const handleShow = () => {
    setShowPassword(!showPassword);
  };

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
            <div className='pass-field'>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
              <span onClick={handleShow} className='show'>{showPassword ? <GrView/> : <GrHide/>}</span>
            </div>
          </div>
          <button type="submit" className='login-btn'>Sign In</button>
          <br /><br /><br />
          <div>Don't have an account <a href='/register'>login</a></div>
        </form>
      </div>
    </div>
  )
}

export default Login