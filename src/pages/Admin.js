import React from 'react';
import { Button } from "../components/AuthForm";
import { useAuth } from "../context/auth";


export const Admin = () => {
  const {setAuthTokens} = useAuth();

  const logOut = () => {
    setAuthTokens()
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <Button onClick={logOut}>Log out</Button>
    </div>
  )
};