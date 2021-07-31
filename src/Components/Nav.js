import React from 'react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../utils/context';

const Nav = () => {
  const { state, dispatch } = useContext(AuthContext);
  return (
    <div className="nav-container p-3">
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        {state.isAuth && (
          <li>
            <button
              className="btn btn-danger mt-3"
              onClick={() => dispatch({ type: 'LOGOUT' })}
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Nav;
