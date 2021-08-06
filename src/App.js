import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Containers/Home';
import RegForm from './Containers/RegForm';
import Dashboard from './Containers/Dashboard';
import { AuthContext, initialState, userReducer } from './utils/context';
import { useEffect, useReducer } from 'react';
import { backendUrlPrefix } from './utils/constants';
import axios from 'axios';
import config from './utils/tokenConfig';
import PrivateRoute from './Components/PrivateRoute';

const App = () => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  useEffect(() => {
    const getUser = async () => {
      try {
        const url = `${backendUrlPrefix}/auth/me`;
        const {
          data: { data, status },
        } = await axios.get(url, config(state.token));
        if (status === 'success') {
          dispatch({ type: 'GET_USER_SUCCESS', payload: data });
        }
      } catch (error) {
        console.log(error.response.data);
        dispatch({ type: 'GET_USER_FAIL' });
      }
    };
    getUser();
  }, [state.token]);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/admin-register" component={RegForm} />
          <PrivateRoute
            path="/dashboard"
            component={Dashboard}
            next="dashboard"
          />
        </Switch>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
