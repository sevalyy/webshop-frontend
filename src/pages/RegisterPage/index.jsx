import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "./style.css";
const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isUserCreated, setUserCreated] = useState(false);

  const doRegisteration = async () => {
    if (cpassword !== password) {
      alert("Passwords don't match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:4000/users", {
        email: email,
        password: password,
      });

      setMessage(`Account created with id ${response.data.id}`);
      setUserCreated(true);
    } catch (e) {
      setMessage("An Error2 occured");
    }
  };
  return (
    <div className="container">
      <div className="registerPage">
        <h2>Register </h2>
        <div>{message}</div>
        {!isUserCreated && (
          <div>
            <p>Welcome! Create an account</p>
            <div>
              <div className="registerForm">
                <label htmlFor="email">Email Adress: </label>
                <br />
                <input
                  className="input"
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  name="email"
                ></input>
                <br />
                <label htmlFor="password">Password: </label>
                <br />
                <input
                  className="input"
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                  name="password"
                ></input>
                <br /> <label htmlFor="cpassword">Confirm Password: </label>
                <br />
                <input
                  className="input"
                  onChange={(event) => setCPassword(event.target.value)}
                  type="password"
                  name="cpassword"
                ></input>
                <br />
                <button className="buttonStyle" onClick={doRegisteration}>
                  Register
                </button>
              </div>
            </div>
          </div>
        )}
        <p>
          Already have an Account? <Link to="/login">Login</Link>
        </p>{" "}
      </div>
    </div>
  );
};

export default RegisterPage;
