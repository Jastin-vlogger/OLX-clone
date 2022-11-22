import React, { useState, useContext } from "react";
import { FirebaseContext } from "../../store/FireBaseContext";
import Logo from "../../olx-logo.png";
import "./Login.css";
import {useHistory} from 'react-router-dom'
import {NavLink} from 'react-router-dom'

function Login() {
  const history = useHistory()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { Firebase } = useContext(FirebaseContext);
  const handleLogin = (e) => {
    console.log(e.target);
    e.preventDefault()
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push('/')
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onClick
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <NavLink to={'/signup'}>Signup</NavLink>
      </div>
    </div>
  );
}

export default Login;
