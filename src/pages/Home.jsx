import React, { useState, useEffect } from 'react'
import { loginUser } from '../api/login.api.js'

const Home = () => {
  const [data, setData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const result = await loginUser("ibtisamansari5@gma.com", "123456789")
      setData(result)
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1>Home</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
  )
}

export default Home