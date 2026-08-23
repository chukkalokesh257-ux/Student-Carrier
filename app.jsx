import { useState } from "react";
import "./App.css";

function App() {
  const [mode, setMode] = useState("choice");
  const [loginMethod, setLoginMethod] = useState("username");

  return (
    <div className="page">
      <div className="auth-container">

        <h1>Welcome Back!</h1>
        <p className="subtitle">
          Login to continue your journey or create a new account
        </p>

        {mode === "choice" && (
          <>
            <h2>Do you have an account?</h2>

            <div className="choice-container">

              <button
                className="choice-card"
                onClick={() => setMode("login")}
              >
                <div className="icon">👤</div>

                <div>
                  <h3>Yes, I have an account</h3>
                  <p>Login to access your account</p>
                </div>

                <span className="arrow">›</span>
              </button>

              <button
                className="choice-card"
                onClick={() => setMode("signup")}
              >
                <div className="icon">👤+</div>

                <div>
                  <h3>No, I'm new here</h3>
                  <p>Create a new account</p>
                </div>

                <span className="arrow">›</span>
              </button>

            </div>
          </>
        )}

        {/* LOGIN */}

        {mode === "login" && (
          <div className="form-card login-card">

            <button
              className="back"
              onClick={() => setMode("choice")}
            >
              ← Back
            </button>

            <h2>Sign In</h2>
            <p>Welcome back! Please login to your account.</p>

            <div className="tabs">

              <button
                className={loginMethod === "username" ? "active" : ""}
                onClick={() => setLoginMethod("username")}
              >
                Username / Email
              </button>

              <button
                className={loginMethod === "google" ? "active" : ""}
                onClick={() => setLoginMethod("google")}
              >
                Google
              </button>

            </div>

            {loginMethod === "username" && (
              <>
                <label>Username or Email</label>

                <input
                  type="text"
                  placeholder="Enter your username or email"
                />

                <label>Password</label>

                <input
                  type="password"
                  placeholder="Enter your password"
                />

                <div className="forgot">
                  Forgot Password?
                </div>

                <button className="primary-btn">
                  Login
                </button>

                <div className="or">
                  <span>or continue with</span>
                </div>

                <button className="google-btn">
                  <span>G</span> Continue with Google
                </button>
              </>
            )}

            {loginMethod === "google" && (
              <button className="google-btn large">
                <span>G</span> Continue with Google
              </button>
            )}

            <p className="bottom-text">
              Don't have an account?
              <button onClick={() => setMode("signup")}>
                Create one
              </button>
            </p>

          </div>
        )}

        {/* SIGN UP */}

        {mode === "signup" && (
          <div className="form-card signup-card">

            <button
              className="back"
              onClick={() => setMode("choice")}
            >
              ← Back
            </button>

            <h2>Create New Account</h2>

            <p>Create your account using your Gmail</p>

            <button className="google-btn">
              <span>G</span> Continue with Google
            </button>

            <div className="or">
              <span>or</span>
            </div>

            <label>Gmail</label>

            <input
              type="email"
              placeholder="user@gmail.com"
            />

            <label>Create Password</label>

            <input
              type="password"
              placeholder="Create a strong password"
            />

            <label>Confirm Password</label>

            <input
              type="password"
              placeholder="Confirm your password"
            />

            <div className="requirements">
              <p>✓ At least 8 characters</p>
              <p>✓ Includes a number</p>
              <p>✓ Includes an uppercase letter</p>
            </div>

            <button className="create-btn">
              Create Account
            </button>

            <p className="bottom-text">
              Already have an account?
              <button onClick={() => setMode("login")}>
                Login
              </button>
            </p>

          </div>
        )}

      </div>
    </div>
  );
}

export default App;