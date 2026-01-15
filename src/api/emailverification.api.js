import axios from "axios";

export const verifyMail = async (email) => {
    const response = await axios.post('/api/v1/users/verifymail', { email })
    return response.data
}