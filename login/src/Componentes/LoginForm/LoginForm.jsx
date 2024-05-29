//../Assets/fondo.mp4
import React from "react";
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import videobg from '../Assets/fondo.mp4';

const LoginForm = () => {
  return (
    <div className="background-video-wrapper">
      <video className="background-video" src={videobg} autoPlay loop muted />
      
      <div className="wrapper">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FaLock className="icon" />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">forgot password?</a>
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>
              No tienes cuenta? <a href="#">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;


