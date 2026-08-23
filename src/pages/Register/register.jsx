import { Link } from "react-router-dom";
import "./register.css";

function Register() {
  return (
    <div className="auth-wrapper">
      <div className="register-container">
        <div className="register-header">
          <h1>Create Account</h1>
          <p className="subtitle">Sign up to get started with your account</p>
        </div>

        <form className="register-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="reg-name">Full Name</label>
            <input
              id="reg-name"
              type="text"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="reg-email">Email Address</label>
            <input
              id="reg-email"
              type="email"
              placeholder="name@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="reg-password">Password</label>
            <input
              id="reg-password"
              type="password"
              placeholder="Create a password"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="reg-confirm">Confirm Password</label>
            <input
              id="reg-confirm"
              type="password"
              placeholder="Confirm your password"
              required
            />
          </div>

          <button type="submit" className="btn-primary">
            Create Account
          </button>
        </form>

        <p className="auth-footer">
          Already have an account?{" "}
          <Link to="/login" className="auth-link">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;