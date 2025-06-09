import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

export default function Register({ openLogin } ) {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', form);
      alert('Registered! Token: ' + res.data.token);
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <div className="container">
      <div className="register-form">
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          <div className="input-box">
            <input
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn">Register</button>
          <div className="login-link">
            <p>
              Already have an account? <button
                type="button"
                className="link-btn"
                onClick={openLogin}
                style={{ background: 'none', border: 'none', color: '#2563eb', cursor: 'pointer', padding: 0 }}
              >
                Login
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
