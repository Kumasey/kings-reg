import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../utils/context';

const Nav = () => {
  const { state, dispatch } = useContext(AuthContext);
  return (
    <div className="nav-container p-3">
      <div className="mr">
        <Link to={'/dashboard'} className="btn btn-primary">
          Back
        </Link>
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
