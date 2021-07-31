import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav-container">
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
