import React, { useState } from "react";
import ReactDOM from "react-dom";
import LandingPage from './pages/LandingPage';
import LogIn from './pages/LogIn';
import "./App.css";
import EasyApply from "./pages/EasyApply";
import EditProfile from "./pages/EditProfile";

function App() {
  return (
    <div className="app">
        {/* <LogIn /> */}
        <EditProfile/>
    </div>
  );
}

export default App;