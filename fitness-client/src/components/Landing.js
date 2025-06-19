import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';
import Login from './Login';
import Register from './Register';
import background from '../images/background-pic.jpg';

const Landing = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  // Functions to switch modals
  const openLogin = () => {
    setShowRegister(false);
    setShowLogin(true);
  };
  const openRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };
  return (
    <div
      className="landing"
      style={{
        background: `url(${background}) center/cover no-repeat`,
        height: '100vh',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <nav className="navbar">
        <div className="logo">Clog</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/strength">Strength</Link>
          <Link to="/dashboard">Diet</Link>
          <Link to="/about">About</Link>
        </div>
        <div className="begin-button">
          <button onClick={() => setShowLogin(true)}>Login</button>
        </div>
      </nav>

      <div className="hero-section">
        <div className="hero-text">
          <h1>Welcome to Clog</h1>
          <p>Your fitness, diet, and strength journey starts here.</p>
          <button className="cta" onClick={openRegister}>
            Join Now
          </button>
        </div>
      </div>

      {showLogin && (
        <div className="modal-overlay" onClick={() => setShowLogin(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowLogin(false)}>×</button>
            <Login openRegister={openRegister} />
          </div>
        </div>
      )}
      {showRegister && (
        <div className="modal-overlay" onClick={() => setShowRegister(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowRegister(false)}>×</button>
            <Register openLogin={openLogin} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Landing;
