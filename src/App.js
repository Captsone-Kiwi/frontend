import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderContainer from "./container/headerContainer";
import { Home, Login, SignUp } from "./pages";

function App() {
  return (
    <Router>
      <HeaderContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
