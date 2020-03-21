import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {PrivateRoute} from "./PrivateRoute";
import {AuthContext} from "./context/auth";

import {HomePage} from './pages/HomePage';
import {Admin} from './pages/Admin';
import {Login} from './pages/Login';
import {Signup} from './pages/Signup';
import {Header} from './commons/Header';

import './App.css';

function App() {
  const [authTokens, setAuthTokens] = useState('');

  const setTokens = (data) => {
    sessionStorage.setItem("tokens", data);
    setAuthTokens(data);
  };

  return (
    <AuthContext.Provider value={{authTokens, setAuthTokens: setTokens}}>
      <Router>
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <PrivateRoute path="/admin" component={Admin}/>
          </Switch>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
