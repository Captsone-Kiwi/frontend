import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderContainer from "./container/headerContainer";
import {
  Home,
  Login,
  SignUp,
  Profile,
  InterviewList,
  InterviewReserve,
  Uploads,
  Main,
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
        <Route path="/interviewlist" element={<InterviewList />} />
        <Route path="/interviewreserve" element={<InterviewReserve />} />
        <Route path="/upload" element={<Uploads />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
