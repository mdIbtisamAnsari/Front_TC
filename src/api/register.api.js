import axios from "axios";

axios.defaults.withCredentials = true

export const registerUser = async ( userName, fullName, email, role, password, profilePhoto) => {
  const formData = new FormData()
  formData.append('userName', userName)
  formData.append('fullName', fullName)
  formData.append('email', email)
  formData.append('role', role)
  formData.append('password', password)
  formData.append('image', profilePhoto)
  
  const response = await axios.post('/api/v1/users/register', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  return response.data
}