import { useState, useEffect } from 'react'
import { loginUser } from '../api/login.api.js'


const Home = () => {
  const [data, setData] = useState()

  return (
    <div>
      <h1>Home</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
  )
}

export default Home