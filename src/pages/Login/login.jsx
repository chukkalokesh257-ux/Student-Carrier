import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login-container">

      <h1>Login</h1>

      <form className="login-form">

        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
          />
        </div>

        <button type="submit">
          Login
        </button>

      </form>

      <p>
        Don't have an account?{" "}
        <Link to="/register">
          Register
        </Link>
      </p>

    </div>
  );
}

export default Login;