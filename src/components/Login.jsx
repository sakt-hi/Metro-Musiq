import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../helpers/AuthContext';
import logo from '../assets/logo.jpeg'

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm(formData);
    if (Object.keys(formErrors).length === 0) {
      // Proceed to login
      login();
      navigate('/');
    } else {
      // Set errors
      setErrors(formErrors);
    }
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.username.trim()) {
      errors.username = 'Username is required';
    }
    if (!data.password.trim()) {
      errors.password = 'Password is required';
    }
    return errors;
  };

  return (
    <div className="login-wrap">
        <div className='login-container'>
            <div className="login-form">
                <div className="banner">
                    <img className='banner-logo' src={logo} alt="" />
                </div>
                <h3>Welcome back!</h3>
                <form onSubmit={handleSubmit}>
                <div className="username">
                    <label htmlFor="username">Username</label>
                    <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    />
                    {errors.username && <span className="error">{errors.username}</span>}
                </div>
                <div className="password">
                    <label htmlFor="password">Password</label>
                    <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    />
                    {errors.password && <span className="error">{errors.password}</span>}
                </div>
                <button className='login-cta' id='login-btn' type="submit">Login</button>
                </form>
            </div>
            </div>
    </div>
  );
};

export default Login;
