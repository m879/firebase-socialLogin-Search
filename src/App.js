import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import {auth,googleAuthProvider}  from './config';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import Auth from './components/Auth';
import Unauthorized from './components/Unauthorized';
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  const [user, setUser] = useState(false)

  const handleLogin = e => {
    e.preventDefault();
    auth.signInWithPopup(googleAuthProvider)
    .then((result) => {
      var user = result.user;
      console.log(user.email);
      localStorage.setItem('user', true);
      localStorage.setItem('userName', user.displayName);
      setUser(true);
    }).catch((error) => {
       console.log(error);
    });

  }

  const handleLogout = e => {
    e.preventDefault();
    auth.signOut().then(()=> {
      console.log('logged out');
      localStorage.removeItem('userName');
    }).catch((error) => {
      console.log(error.message)
    })
    setUser(false);
  }

  return (
    <div className="App">
      
    <Router>
      
      <Route exact path='/' handleLogin={handleLogin} render={
        props => <Auth {...props} user={user.toString()}
          handleLogin={handleLogin} />} />
      <ProtectedRoute exact path='/home' user={user} handleLogout={handleLogout} component={Home} />
      <Route exact path='/unauthorized' component={Unauthorized} />
    </Router>
  </div>
  );
}

export default App;
