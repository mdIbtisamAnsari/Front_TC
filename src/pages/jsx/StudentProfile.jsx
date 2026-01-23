import React from 'react'

const StudentProfile = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <>
    <div>
      <h2>Student Profile</h2>
      <form onSubmit={handleSubmit}>

      </form>
    </div>
    </>
  )
}

export default StudentProfile