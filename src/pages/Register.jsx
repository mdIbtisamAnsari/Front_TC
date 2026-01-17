import { useState } from 'react'
import './Register.css'
import { registerUser } from "../api/register.api.js"
import { verifyMail } from "../api/emailverification.api.js"
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [userName, setUserName] = useState('')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [profilePhoto, setProfilePhoto] = useState(null)


  const [emailVerified, setEmailVerified] = useState(false)
  const [otp, setOtp] = useState('')
  const [inputOtp, setInputOtp] = useState('')
  const [emailVerifie, setEmailVerifie] = useState(false)

  const [alreadyEmail, setAlreadyEmail] = useState(false)
  const [alreadyUserName, setAlreadyUserName] = useState(false)

  const navigate = useNavigate()



  const handleVerification = async () => {

    if (!email || !email.includes("@")) {
      alert("Please enter valid email first")
      return
    }
    setEmailVerifie(true)
    const response = await verifyMail(email)
    setOtp(response.data)
  }

  const handleOTP = () => {
    if (otp == inputOtp) {
      setEmailVerified(true)
      setEmailVerifie(true)
    }
    else {
      alert("Please enter correct OTP")
      setEmailVerified(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('Passwords do not match with confirm password')
      return
    }
    try {
      await registerUser(userName, fullName, email, role, password, profilePhoto)
      navigate('/')
    } catch (error) {
      if(error.status==409){setAlreadyUserName(true)}
      if(error.status==410){setAlreadyEmail(true)}
    }
  }

  const handleChangeEmail = () => {
    setEmailVerifie(false)
    setEmailVerified(false)
    setInputOtp('')
    setOtp('')
  }



  return (
    <div className='registration-container'>
      <h2>Register</h2>
      <form className="registrationForm" onSubmit={handleSubmit}>
        <div className='form-element'>
          <label>User Name{alreadyUserName?(<span style={{color:"red"}}>Already exist</span>):""}</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value)
              setAlreadyUserName(false)
            }}
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
          <label>Email{emailVerified ? (<span style={{ color: "green" }}>Verified</span>) : ""}{alreadyEmail?(<span style={{color:"red"}}>Already exist</span>):""}</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setAlreadyEmail(false)
            }}
            required
            disabled={emailVerifie}
          />
        </div>
        <div className='button-box'>
          <button
            type='button'
            className='ver-but'
            onClick={handleVerification}
            disabled={emailVerifie}>
            Verify Email
          </button>
          <button
            type='button'
            className='ver-but'
            onClick={handleChangeEmail}
          >
            Change Email
          </button>
        </div>

        <div className='form-element'>
          <label>Enter OTP</label>
          <input
            type='text'
            value={inputOtp}
            onChange={(e) => setInputOtp(e.target.value)}
            required
            disabled={emailVerified}
          />
        </div>
        <div className='button-box'>
          <button
            type='button'
            className='ver-but'
            onClick={handleOTP}
            disabled={emailVerified}>
            Verify OTP
          </button>
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
        <button type='submit' className='reg-but' disabled={!emailVerified}>Register</button>

      </form>
    </div>
  )
}

export default Register