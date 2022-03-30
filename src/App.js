import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderContainer from "./container/headerContainer";
import { Home, Login, SignUp, Profile, Interview, Uploads, Main } from "./pages";

// import Room from "./routes/Room";

function App() {
  return (
    <Router>
      <HeaderContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/upload" element={<Uploads />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
