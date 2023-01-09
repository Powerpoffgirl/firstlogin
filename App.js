import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Dashboard from "./Dashboard";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import Login from "./Login";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        //user is logged out
        dispatch(logout());
      }
    });
  }, [])

  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <div className="dashboard">
          <Dashboard />
        </div>
      )}
    </div>
  );
}

export default App;
