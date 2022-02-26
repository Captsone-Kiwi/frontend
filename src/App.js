import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Navbar />
        {/* <Route path='/' exact component={Home}/>
        <Route path='/solution' exact component={Solution}/>
        <Route path='/question' exact component={Question}/> */}
    </Router>
  );
}

export default App;
