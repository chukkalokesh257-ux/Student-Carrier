import { Link } from "react-router-dom";
import "./register.css";

function Register() {

  const handleRegister = async (e) => {
    e.preventDefault();

    const name = e.target["reg-name"].value;
    const email = e.target["reg-email"].value;
    const password = e.target["reg-password"].value;
    const confirmPassword = e.target["reg-confirm"].value;

    // Check passwords
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:8002/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email,
            password
          })
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Account created successfully!");

        window.location.href = "/dashboard";
      } else {
        alert(data.message);
      }

    } catch (error) {
      console.error("Registration error:", error);
      alert("Unable to connect to server");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="register-container">

        <div className="register-header">
          <h1>Create Account</h1>
          <p className="subtitle">
            Sign up to get started with your account
          </p>
        </div>

        <form className="register-form" onSubmit={handleRegister}>

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