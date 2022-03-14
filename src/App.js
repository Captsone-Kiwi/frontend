import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderContainer from "./container/headerContainer";
import {
  Home,
  Login,
  SignUp,
  Profile,
  InterviewSchedule,
  Uploads,
} from "./pages";

function App() {
  return (
    <Router>
      <HeaderContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/interview" element={<InterviewSchedule />} />
        <Route path="/upload" element={<Uploads />} />
      </Routes>
    </Router>
  );
}

export default App;
