import React, { useState } from "react";
import ReactDOM from "react-dom";
import LandingPage from './pages/LandingPage';
import LogIn from './pages/LogIn';
import "./App.css";
import EasyApply from "./pages/EasyApply";

function App() {
  return (
    <div className="app">
        {/* <LogIn /> */}
        <EasyApply/>
    </div>
  );
}

export default App;