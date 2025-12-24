import {useState} from 'react'
import userImg from '../assets/user.png'

const Register = () => {
  const [userName, setUserName] = useState('')
  const [fullName, setfullName]= useState('')
  const [profile, setProfile]= useState(userImg)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassward, setCofirmPasswrd]= useState('')

  return (
    <div>
      <h2>Register</h2>
      <form className="registrationForm" onSubmit={handleSubmit}>
        <div>
          <label>User Name : </label>
          <input 
            type="text"
            value={userName}
            onChange={(e)=> setUserName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Full Name : </label>
          <input 
            type="text"
            value={fullName}
            onChange={(e)=> setfullName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>User Name</label>
          <input 
            type="text"
            value={userName}
            onChange={(e)=> setUserName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>User Name</label>
          <input 
            type="text"
            value={userName}
            onChange={(e)=> setUserName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>User Name</label>
          <input 
            type="text"
            value={userName}
            onChange={(e)=> setUserName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>User Name</label>
          <input 
            type="text"
            value={userName}
            onChange={(e)=> setUserName(e.target.value)}
            required
          />
        </div>
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default Register