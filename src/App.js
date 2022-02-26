import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './pages/Login/login';
import SignUpContainer from './pages/SignUp/SignUpContainer';

function App() {

  return (
    
    <Router>
      <Navbar />
        {/* <SignUpContainer/> */}
        {/* <Route path='/' exact component={Home}/> */}
        <Route path='/signup' component={SignUpContainer}/>
        <Route path='/login' component={Login}/>
    </Router>
  );
}

export default App;
