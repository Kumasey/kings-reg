import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../utils/context';

const Nav = () => {
  const { state, dispatch } = useContext(AuthContext);
  return (
    <div className="nav-container p-3">
      <div className="mr">
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
