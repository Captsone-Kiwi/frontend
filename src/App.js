import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginForm from './pages/Login/LoginForm';
import SignUpForm from './pages/SignUp/SignUpForm';

function App() {

  return (
    
    <Router>
      <Navbar />
        {/* <SignUpContainer/> */}
        {/* <Route path='/' exact component={Home}/> */}
        <Route path='/signup' component={SignUpForm}/>
        <Route path='/login' component={LoginForm}/>
    </Router>
  );
}

export default App;
