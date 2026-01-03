import axios from 'axios'

axios.defaults.withCredentials = true

export const loginUser = async (email, password) => {
  const response = await axios.post('/api/v1/users/login', 
    { email, password }
  )
  return response.data
}