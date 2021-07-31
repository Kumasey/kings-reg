import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="App">
        <form action="get" className="col-3 m-auto">
          <h3>Sign In</h3>
          <div className="form-group">
            <label htmlFor="register-email">Username or email address</label>
            <input type="email" id="register-email" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="register-password">Password</label>
            <input
              type="password"
              id="register-password"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block btn-success">
              Login
            </button>
          </div>
          <div className="form-group">
            <button type="button" className="btn btn-block btn-dark">
              New to KingsReg? <Link to="/admin-register">Register</Link>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Home;
