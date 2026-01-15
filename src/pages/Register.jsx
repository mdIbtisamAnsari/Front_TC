import {useState} from 'react'
import './Register.css'
import { registerUser } from "../api/register.api.js"
import { verifyMail } from "../api/emailverification.api.js"

const Register = () => {
  const [userName, setUserName] = useState('')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [profilePhoto, setProfilePhoto] = useState(null)
  const [emailVerified, setEmailVerified] = useState(false)

  const handleSubmit = async(e) => {
    e.preventDefault()
    await registerUser(userName, fullName, email, role, password, profilePhoto)
    await navigate('/')
    window.location.reload()
  }
  const handleVerification = async()=>{
    const response = await verifyMail(email)
    console.log(response);
  }
  

  return (
    <div className='registration-container'>
      <h2>Register</h2>
      <form className="registrationForm" onSubmit={handleSubmit}>
        <div className='form-element'>
          <label>User Name</label>
          <input 
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div className='form-element'>
          <label>Full Name</label>
          <input 
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className='form-element'>
          <label>Email</label>
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='role'>
          <label>Role</label>
          <select 
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select Role</option>
            <option value="student">Student</option>
            <option value="tutor">Tutor</option>
          </select>
        </div>
        <div className='form-element'>
          <label>Profile Photo</label>
          <input 
            type="file"
            accept="image/*"
            onChange={(e) => setProfilePhoto(e.target.files[0])}
            required
          />
        </div>
        <div className='form-element'>
          <label>Password</label>
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className='form-element'>
          <label>Confirm Password</label>
          <input 
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type='submit' className='reg-but'>Register</button>
        <button type='button' className='ver-but' onClick={handleVerification}>Verify Email</button>
      </form>
    </div>
  )
}

export default Register