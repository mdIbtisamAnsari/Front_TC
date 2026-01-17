import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;

export const useUser = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const currentUser = async () => {
      await axios.get('/api/v1/users/userdetails')
        .then((response) => {
          setUser(response.data.data);
        })
        .catch(async (err) => {
          
          await axios.post('/api/v1/users/getaccesstoken')
            .then(async () => {
              await axios.get('/api/v1/users/userdetails')
                .then((userResponse) => {
                  setUser(userResponse.data.data);
                });
            });
        });
    };
    currentUser();
  }, []);

  return { user };
};