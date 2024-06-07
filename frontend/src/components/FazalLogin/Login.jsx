import React, { useState } from "react";
import axios from "axios";
import "./loginstyles.css";

const Login = ({ onLogin }) => {
  const [isSignUp, setIsSignUp] = useState(false); // State to track whether to display sign-up or login form

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [signUpName, setSignUpName] = useState("");
  const [signUpEmail, setSignupEmail] = useState("");
  const [signUpDesignation, setSignUpDesignation] = useState("");
  const [signUpPhone, setSignUpPhone] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState(""); // State to manage error message

  // Inside handleLogin function in Login.jsx
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        loginEmail,
        loginPassword,
      });
      if (response.data.message === "valid") {
        onLogin(loginEmail); // Pass loginEmail to the onLogin function
      }
      if (response.data.message === "invalid") {
        alert("Account does not exist, Click on Signup.");
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    if (signUpPassword === confirmPassword) {
      try {
        const response = await axios.post("http://localhost:5000/signup", {
          signUpName,
          signUpEmail,
          signUpDesignation,
          signUpPhone,
          signUpPassword,
        });
        if (response.data.message == "valid") {
          alert("User Account Created Successfully. Click on Login.");
        }
        if (response.data.message == "invalid") {
          alert("Error while creating Account");
        }
        if (
          response.data.message !== "valid" &&
          response.data.message !== "invalid"
        ) {
          alert(response.data.message);
        }
      } catch (error) {
        alert(error);
      }
    } else {
      alert("Password do not match.");
    }
  };

  return (
    <div className="container">
      <div className="content-box">
        <div className="toggle-buttons">
          <button
            className={!isSignUp ? "active" : ""}
            onClick={() => {
              setIsSignUp(false);
              setSignUpName("");
              setSignupEmail("");
              setSignUpDesignation("");
              setSignUpPhone("");
              setSignUpPassword("");
              setConfirmPassword("");
            }}
          >
            Log In
          </button>
          <button
            className={isSignUp ? "active" : ""}
            onClick={() => {
              setIsSignUp(true);
              setLoginEmail("");
              setLoginPassword("");
            }}
          >
            Sign Up
          </button>
        </div>
        <div className="form-container">
          {isSignUp ? (
            <>
              <h2>Sign Up</h2>
              <form onSubmit={handleSignin}>
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={signUpName}
                    placeholder="Enter your Name"
                    onChange={(e) => setSignUpName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={signUpEmail}
                    placeholder="Enter your Mail Id"
                    onChange={(e) => setSignupEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="designation"
                    name="designation"
                    value={signUpDesignation}
                    placeholder="Enter your designation"
                    onChange={(e) => setSignUpDesignation(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={signUpPhone}
                    placeholder="Enter your Mobile"
                    onChange={(e) => setSignUpPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={signUpPassword}
                    placeholder="Enter your password"
                    onChange={(e) => setSignUpPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={confirmPassword}
                    placeholder="Enter confirm password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit">Sign Up</button>
              </form>
            </>
          ) : (
            <>
              <h2>Login</h2>
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <input
                    type="email"
                    id="loginEmail"
                    name="loginEmail"
                    placeholder="Enter Your Mail Id"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    id="loginPassword"
                    name="loginPassword"
                    placeholder="Enter your password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit">Login</button>
                {errorMessage && (
                  <p className="error-message">{errorMessage}</p>
                )}
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
