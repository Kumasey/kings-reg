import React from 'react';
import { Link } from 'react-router-dom';
import { EyeClosedIcon } from '@primer/octicons-react';

const Page404 = () => {
  return (
    <div className="page404">
      <h1>404</h1>
      <EyeClosedIcon size={84} />
      <h2>Page Not Found</h2>
      <Link to="/dashboard">
        <button className="btn btn-primary" type="button">
          Back
        </button>
      </Link>
    </div>
  );
};

export default Page404;
