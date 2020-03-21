import React from 'react';
import { NavLink } from "react-router-dom";

export const Header = () => {
  return(
    <div>
      <NavLink exact to='/'>Home</NavLink>
      <NavLink to='/admin'>Admin</NavLink>
    </div>
  )
};