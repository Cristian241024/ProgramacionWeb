import React, { useState } from "react";
import '../styles/Login.css'
import { FaUser, FaLock } from "react-icons/fa";
import videobg from '../assets/fondo.mp4';

function Login() {

    // Definir los valores de username y password
  const predefinedUsername = "cris";
  const predefinedPassword = "cris123";

  // Usar el estado para almacenar los valores de entrada del usuario
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = (event) => {
    event.preventDefault();
    // Verificar si el nombre de usuario y la contraseña son correctos
    if (username === predefinedUsername && password === predefinedPassword) {
      // Redirigir a la página index.html en la carpeta client
      window.location.href = "/client/index.html";
    } else {
      alert("Username or password is incorrect");
    }
  }
    return (
        <div className="background-video-wrapper">
          <video className="background-video" src={videobg} autoPlay loop muted />
          
          <div className="wrapper">
            <form action="">
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
                  No tienes cuenta? <a href="#">Register</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      );
}

export default Login;
