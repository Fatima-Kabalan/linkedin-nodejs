import React, { useState } from "react";
import ReactDOM from "react-dom";
import LandingPage from './pages/LandingPage';
import LogIn from './pages/LogIn';
import "./App.css";
import EasyApply from "./pages/EasyApply";
import EditProfile from "./pages/EditProfile";
import SignUpPage from "./pages/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
     
        <BrowserRouter> 
        <></>
          <Routes>
            <Route  path="/signup" element={<SignUpPage/>} />
            <Route path="/login" element={<LogIn/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;