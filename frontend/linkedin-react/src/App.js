import React, { useState } from "react";
import ReactDOM from "react-dom";
import LandingPage from './pages/LandingPage';
import LogIn from './pages/LogIn';
import "./App.css";
import EasyApply from "./pages/EasyApply";
import EditProfile from "./pages/EditProfile";
import SignUpPage from "./pages/Signup";

function App() {
  return (
    <div className="app">
        {/* <LogIn /> */}
        <SignUpPage/>
    </div>
  );
}

export default App;