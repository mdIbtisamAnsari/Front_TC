import { Link } from 'react-router-dom'
import './home.css'

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Tute Connect</h1>
          <p className="hero-subtitle">
            Connecting students with qualified tutors for personalized learning experiences
          </p>
          <div className="cta-buttons">
            <Link to="/register" className="btn btn-primary">Find a Tutor</Link>
            <Link to="/register" className="btn btn-secondary">Become a Tutor</Link>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">Why Choose Tute Connect?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Qualified Tutors</h3>
            <p>Connect with experienced and verified tutors across various subjects</p>
          </div>
          <div className="feature-card">
            <h3>Flexible Learning</h3>
            <p>Schedule sessions that fit your availability and learning pace</p>
          </div>
          <div className="feature-card">
            <h3>Affordable Rates</h3>
            <p>Find tutoring services that match your budget and requirements</p>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2 className="section-title">How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Sign Up</h3>
            <p>Create your account as a student or tutor</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Connect</h3>
            <p>Browse and connect with suitable matches</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Learn</h3>
            <p>Start your personalized learning journey</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home