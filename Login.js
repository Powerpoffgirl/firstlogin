import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { login } from "./features/userSlice";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch("");

  const register = () => {
    if (!name) {
      return alert("Please enter a full name");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };

  const loginToApp = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password) //Trying to login with email and password
      .then((userAuth) => {
        dispatch(
          //Sending data to the database
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error)); //Throwing an alert if something is missing.
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form className="col-sm-6 offset-sm-3">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          placeholder="Full Name (required is registering)"
          type="text"
        />
        <br />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          placeholder="Email"
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          placeholder="Password"
        />
        <br />
        <button className="btn btn-primary" onClick={loginToApp}>
          Login
        </button>
      </form>
      <br/>
      <p>
        Not a member?{" "}
        <span className="loginRegister" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
