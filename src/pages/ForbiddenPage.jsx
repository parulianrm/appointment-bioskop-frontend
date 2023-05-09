import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ForbiddenPage.css';

const ForbiddenPage = () => {
  return (
    <div className="container-forbidden">
      <div className="card">
        <h1>403</h1>
        <p>Oops! You do not have permission to access this page.</p>
        <Link to="/" className="btn">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ForbiddenPage;
