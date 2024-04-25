import React from 'react'
import logo from '../assets/logo.jpeg'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../helpers/AuthContext';

const Navbar = () => {
    const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    logout();
    navigate('/login');
  };
  return (
    <div className='navbar-container'>
        <div className="logo">
            <img src={logo} alt="" />
            <p>Metro Musiq</p>
        </div>
        <ul>
            <li>
                <span class="material-symbols-outlined">person</span>
                Username
            </li>
            <li onClick={handleLogin}>
                <span class="material-symbols-outlined">power_settings_new</span>
                Logout
            </li>
        </ul>
    </div>
  )
}

export default Navbar