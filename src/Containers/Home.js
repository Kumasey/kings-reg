import axios from 'axios';
import { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { backendUrlPrefix } from '../utils/constants';
import { AuthContext } from '../utils/context';
import makeToast from '../Components/Toaster';

const Home = (props) => {
  const { state, dispatch } = useContext(AuthContext);
  const [inputs, setInputs] = useState({
    text: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const url = `${backendUrlPrefix}/auth/login`;
      dispatch({ type: 'LOADING' });
      const {
        data: { status, data },
      } = await axios.post(url, inputs);
      if (status === 'success') {
        makeToast('success', 'Login was successful');
        dispatch({ type: 'LOGIN_SUCCESS', payload: data });
      }
    } catch (error) {
      makeToast('error', error?.response?.data.error);
      dispatch({ type: 'LOGIN_FAIL' });
    }
  };
  const query = new URLSearchParams(props.location.search);
  const next = query.get('next');
  if (state.isAuth) {
    return <Redirect to={next === null ? '/dashboard' : `/${next}`} />;
  }
  return (
    <>
      <div className="App">
        <form onSubmit={handleSubmit} className="col col-lg-4 col-sm-6  m-auto">
          <h3>Admin Sign In</h3>
          <div className="form-group">
            <label htmlFor="register-email">Username or email address</label>
            <input
              type="text"
              id="register-email"
              className="form-control"
              placeholder="Username or email address"
              name="text"
              value={inputs.text}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="register-password">Password</label>
            <input
              type="password"
              id="register-password"
              className="form-control"
              placeholder="Password"
              name="password"
              value={inputs.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block btn-success">
              Login
              {state.loading ? '    Loading.....' : ''}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Home;
