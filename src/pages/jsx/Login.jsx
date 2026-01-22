import { useState } from 'react'
import '../css/login.css'
import Loading from '../../components/Loading.jsx'
import { loginUser } from "../../api/login.api.js"
import { useNavigate } from 'react-router-dom'
import { GrView } from "react-icons/gr";
import { GrHide } from "react-icons/gr";


const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [incorrectEmail, setIncorrectEmail]= useState(false)
  const [incorrectPassword, setIncorrectPassword]= useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await loginUser(email, password)
      await navigate('/')
      window.location.reload()
    }
    catch(error){
      if(error.status==404){
        setIncorrectEmail(true)
      }
      if(error.status==401){
        setIncorrectPassword(true)
      }
    }
    finally {
      setLoading(false)
    }
  }

  const handleShow = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      {loading && <Loading />}
      <div className='login-container'>
        <div className='formBody'>
        <h2>Welcome Back</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label>Email Address  {incorrectEmail?(<span style={{color:"red"}}>Invalid Email</span>):''}</label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setIncorrectEmail(false)
              }}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className='form-group'>
            <label>Password  {incorrectPassword?(<span style={{color:'red'}}>Invaled Password</span>):''}</label>
            <div className='pass-field'>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  setIncorrectPassword(false)
                }}
                placeholder="Enter your password"
                required
              />
              <span onClick={handleShow} className='show'>{showPassword ? <GrView/> : <GrHide/>}</span>
            </div>
          </div>
          <button type="submit" className='login-btn'>{loading ? 'Signing In...' : 'Sign In'}</button>
          <br /><br /><br />
          <div>Don't have an account? <a href='/register'>Register</a></div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login