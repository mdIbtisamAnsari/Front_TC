import { useState } from 'react'
import { subjectList } from '../../assets/subjectList.js'
import { countries } from '../../assets/countries.js'
import '../css/CreateStudentPost.css'
import axios from 'axios'

const CreateStudentPost = () => {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedSubject, setSelectedSubject] = useState('')
  const [customSubject, setCustomSubject] = useState('')
  const [studentQualification, setStudentQualification] = useState('')
  const [requirement, setRequirement] = useState('')
  const [tutorQualification, setTutorQualification] = useState('')
  const [offer, setOffer] = useState('')
  const [mode, setMode] = useState('')
  const [country, setCountry] = useState('')
  const [address, setAddress] = useState('')

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      await axios.post('/api/v1/students/createpost', {
        selectedCategory,
        selectedSubject,
        customSubject,
        studentQualification,
        requirement,
        tutorQualification,
        offer: Number(offer),
        mode,
        country,
        address
      })
    } catch (error) {
      console.error('Error creating post:', error)
    }
  }



  return (
    <div className="student-profile-container">
      <div className="profile-form-body">
        <h2>Post a Tutor Requirement</h2>
        <form onSubmit={handleSubmit}>
          <div className="profile-form-group">
            <label>Choose Subject Category</label>
            <select defaultValue="" onChange={(e) => setSelectedCategory(e.target.value)} required>
              <option value="" disabled>Choose Subject category</option>
              <option value="mathematics">Mathematics</option>
              <option value="science">Science</option>
              <option value="programming">Programming & Computer Science</option>
              <option value="languages">Languages</option>
              <option value="business">Business & Economics</option>
              <option value="arts">Arts & Design</option>
              <option value="social-studies">Social Studies</option>
              <option value="test-prep">Test Preparation</option>
              <option value="health">Health & Medicine</option>
              <option value="engineering">Engineering</option>
              <option value="law">Law</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="profile-form-group">
            <label>Choose subject</label>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              disabled={!selectedCategory}
              required
            >
              <option value="" disabled>
                {selectedCategory ? 'Choose specific subject' : 'Select category first'}
              </option>
              {selectedCategory && subjectList[selectedCategory]?.map((subject, index) => (
                <option key={index} value={subject}>{subject}</option>
              ))}
            </select>
          </div>
          {(selectedSubject === 'Custom Subject' || selectedSubject === 'Other') && (
            <div className="profile-form-group">
              <label>Enter Custom Subject Name</label>
              <input 
                type="text" 
                value={customSubject}
                onChange={(e) => setCustomSubject(e.target.value)}
                placeholder="Enter your custom subject" 
                required 
              />
            </div>
          )}
          <div className="profile-form-group">
            <label>Your Current Qualification</label>
            <select value={studentQualification} onChange={(e) => setStudentQualification(e.target.value)} required>
              <option value="" disabled>Select your qualification</option>
              <option value="primary">Primary School</option>
              <option value="middle">Middle School</option>
              <option value="high-school">High School</option>
              <option value="diploma">Diploma</option>
              <option value="bachelors">Bachelor's Degree</option>
              <option value="masters">Master's Degree</option>
              <option value="phd">PhD</option>
              <option value="working-professional">Working Professional</option>
            </select>
          </div>
          <div className="profile-form-group">
            <label>Describe your requirement</label>
            <textarea value={requirement} onChange={(e) => setRequirement(e.target.value)} rows="5" placeholder="Enter your requirements here..." required></textarea>
          </div>
          <div className="profile-form-group">
            <label>Preferred Tutor Qualification</label>
            <select value={tutorQualification} onChange={(e) => setTutorQualification(e.target.value)} required>
              <option value="" disabled>Select minimum qualification</option>
              <option value="high-school">High School</option>
              <option value="diploma">Diploma</option>
              <option value="bachelors">Bachelor's Degree</option>
              <option value="masters">Master's Degree</option>
              <option value="phd">PhD</option>
              <option value="professional">Professional Certification</option>
              <option value="no-preference">No Preference</option>
            </select>
          </div>
          <div className="profile-form-group">
            <label>Offer (per hour)</label>
            <input type="number" value={offer} onChange={(e) => setOffer(e.target.value)} placeholder="Enter your budget per hour" min="1" required />
          </div>
          <div className="profile-form-group">
            <label>Preferred Mode</label>
            <select value={mode} onChange={(e) => setMode(e.target.value)} required>
              <option value="" disabled>Choose mode</option>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
              <option value="both">Both</option>
            </select>
          </div>
          <div className="profile-form-group">
            <label>Country</label>
            <select value={country} onChange={(e) => setCountry(e.target.value)} required>
              <option value="" disabled>Select your country</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>{country}</option>
              ))}
            </select>
          </div>
          <div className="profile-form-group">
            <label>Address (With Postal Code)</label>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter your location" required/>
          </div>
          <button type="submit" className="profile-submit-btn">Post Requirement</button>
        </form>
      </div>
    </div>
  )
}

export default CreateStudentPost