import { Link } from "react-router-dom";
import "./style.css";

const LoginPage = () => {
  return (
    <div className="container">
      <div className="loginPage">
        <h2>Login </h2>
        <p>Please login using account detail below</p>
        <div className="loginForm">
          <label for="email">Email Adress:</label>
          <br />
          <input className="input" type="email" name="email"></input>
          <br />
          <label for="password">Password: </label>
          <br />
          <input className="input" type="password" name="password"></input>
          <br />

          <br />
          <button className="buttonStyle">Sign In</button>
        </div>
        <p>Don't have an Account? </p>{" "}
        <Link to="/register">Create an Account</Link>
      </div>
    </div>
  );
};

export default LoginPage;
