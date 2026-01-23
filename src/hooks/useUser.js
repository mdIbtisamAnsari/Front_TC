import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;

export const useUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = async () => {
      try {
        const response = await axios.get('/api/v1/users/userdetails');
        setUser(response.data.data);
      } catch (err) {
        
        if (err.response?.status == 450) return; // not logged in
        
        try {
          await axios.post('/api/v1/users/getaccesstoken');
          const userResponse = await axios.get('/api/v1/users/userdetails');
          setUser(userResponse.data.data);
        } catch (refreshError) {
          console.error('Failed to refresh token:', refreshError);
          setUser(null);
        }
      }
    };
    currentUser();
  }, []);

  return { user };
};