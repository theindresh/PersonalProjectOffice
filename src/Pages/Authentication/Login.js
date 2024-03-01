import React, { useState } from "react";
import axios from "axios";
// import "./login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8081/login", {
        username,
        password,
      });

      if (response.status === 200) {
        setMessage("Login successful");
      } else {
        setMessage("Invalid credentials");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setMessage("An error occurred");
    }
  };

  return (
    <div className="App">
      <div className="login-container">
        <h2>Login</h2>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Login</button>
        {message && (
          <p className={message === "Login successful" ? "success" : "error"}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
export default Login;
