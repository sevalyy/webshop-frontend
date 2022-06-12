import axios from "axios";
import { Link } from "react-router-dom";
import "./style.css";
import { useState } from "react";

const LoginPage = (props) => {
  const token = props.token;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setError] = useState(false);
  const isUserNotLoggedin = token == null;
  const [isLoggedin, setLogggedin] = useState(!isUserNotLoggedin);
  const setToken = props.setToken;

  const doLogin = async () => {
    try {
      const response = await axios.post("http://localhost:4000/auth/login", {
        email: email,
        password: password,
      });
      setToken(response.data.token);
      setLogggedin(true);
    } catch (e) {
      setError(true);
    }
  };
  const doLogout = () => {
    setToken(null);
    //setToken'i null yapman log out olmani sagliyor ama
    //sayfayi tekrar render etmedigi icin cikis yaptigini goremiyorsun.
    //o yuzden bir de setLoggedin'in degerini degistiriyoruz.
    setLogggedin(false);
  };

  return (
    <div className="container">
      {isLoggedin && (
        <div>
          <p>You are logged in!</p>

          <p>
            Go to <Link to="/shop"> Shop Page</Link>
            <p>or</p>
          </p>
          <button className="buttonStyle" onClick={doLogout}>
            Log Out
          </button>
        </div>
      )}
      {!isLoggedin && (
        <div className="loginPage">
          <h2>Login </h2>
          <p>Please login using account detail below</p>
          {isError && <p style={{ color: "red" }}>Try Again</p>}
          <div className="loginForm">
            <label for="email">Email Adress:</label>
            <br />
            <input
              onChange={(event) => setEmail(event.target.value)}
              className="input"
              type="email"
              name="email"
            ></input>
            <br />
            <label for="password">Password: </label>
            <br />
            <input
              onChange={(event) => setPassword(event.target.value)}
              className="input"
              type="password"
              name="password"
            ></input>
            <br />

            <br />
            <button onClick={doLogin} className="buttonStyle">
              Sign In
            </button>
          </div>
          <p>Don't have an Account? </p>{" "}
          <Link to="/register">Create an Account</Link>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
