import React, {useState} from "react";
import {Link, Redirect, useHistory} from 'react-router-dom';
import logoImg from "../img/logo.png";
import {Card, Logo, Form, Input, Button, Error} from '../components/AuthForm';
import {useAuth} from "../context/auth";

export const Login = props => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const {authTokens, setAuthTokens} = useAuth();

  const history = useHistory();
  //
  const referer = props.location.state.referer || "/";
  // console.log(referer);

  if(authTokens) {
    history.replace(referer);
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    let hardcodedCred = {
      email: 'email@email.com',
      password: '123'
    };



    if ((emailInput === hardcodedCred.email) && (passwordInput === hardcodedCred.password)) {
      const token = '123456abcdef';
      setAuthTokens(token);
      setLoggedIn(true);
      history.replace(referer);

    } else {
      //bad combination
      setIsError(true);
    }

    // if (isLoggedIn) {
    //   console.log('test');
    //   // return <Redirect to={ { pathname: referer} }/>;
    //   history.replace(referer)
    // }

    // if (!sessionStorage.getItem('auth-token')) {
    //   console.log('no auth token set');
    //   //do something like redirect to login page
    // } else {
    //   const authToken = '123456abcdef';
    //   if (sessionStorage.getItem('auth-token') === authToken) {
    //     console.log('good token. Log in.')
    //     //do something like redirect to todo page
    //   } else {
    //     console.log('bad token.')
    //     //do something like redirect to login page
    //   }
    // }
  };

  return (
    <Card>
      <Logo src={logoImg}/>
      <Form onSubmit={handleLoginSubmit}>
        <Input
          type="email"
          value={emailInput}
          onChange={e => {
            setEmailInput(e.target.value)
          }}
          placeholder="email"/>
        <Input
          type="password"
          value={passwordInput}
          onChange={e => {
            setPasswordInput(e.target.value)
          }}
          placeholder="password"/>
        <Button>Sign In</Button>
      </Form>
      <Link to="/signup">Don't have an account?</Link>
      {isError && <Error>The username or password provided were incorrect!</Error>}
    </Card>
  )
};