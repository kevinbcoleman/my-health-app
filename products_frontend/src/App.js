import './App.css';
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'


function App() {

  return (
    <Router className="App">
      <Route path='/users/register/' component={Register} />
      <Route path='/users/login/' component={Login} />
      <Route path='/' component={Home} exact />
    </Router>
  );
}

export default App;
