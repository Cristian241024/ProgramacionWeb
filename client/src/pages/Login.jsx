// src/pages/Login.jsx

import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import { FaUser, FaLock } from "react-icons/fa";
import videobg from '../assets/fondo.mp4';

function Login() {
  const predefinedUsername = "cris";
  const predefinedPassword = "cris123";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLoginClick = (event) => {
    event.preventDefault();
    if (username === predefinedUsername && password === predefinedPassword) {
      navigate("/admin");
    } else {
      alert("Username or password is incorrect");
    }
  }

  const handleRegisterClick = () => {
    navigate("/register");
  }

  return (
    <div className="background-video-wrapper">
      <video className="background-video" src={videobg} autoPlay loop muted />

      <div className="wrapper">
        <form>
          <h1>Login</h1>
          <div className="input-box">
            <input 
              type="text" 
              placeholder="Username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required 
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
            <FaLock className="icon" />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">forgot password?</a>
          </div>
          <button type="submit" onClick={handleLoginClick}>Login</button>
          <div className="register-link">
            <p>
              No tienes cuenta? <a href="#" onClick={handleRegisterClick}>Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
