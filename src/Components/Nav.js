import React from 'react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../utils/context';

const Nav = () => {
  const { state, dispatch } = useContext(AuthContext);
  return (
    <div className="nav-container p-3">
      <div>
        <NavLink exact to="/">
          Home
        </NavLink>
      </div>
      <div>
        {state.isAuth && (
          <div>
            <button
              className="btn btn-danger "
              onClick={() => dispatch({ type: 'LOGOUT' })}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
