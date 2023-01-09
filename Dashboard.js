import React from "react";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { logout } from "./features/userSlice";


function Dashboard() {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="dashboard">
      <h1>You are logged into the dashboard</h1>
      <button onClick={logoutOfApp} className="btn btn-primary">
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
