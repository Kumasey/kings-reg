import { Redirect, Route } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../utils/context';

const PrivateRoute = ({ component: Component, next, ...rest }) => {
  const { state } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (state.loading) return <h2>Loading...</h2>;
        if (!state.isAuth) return <Redirect to={`/?next=${next}`} />;
        return <Component {...props} />;
      }}
    />
  );
};

export default PrivateRoute;
