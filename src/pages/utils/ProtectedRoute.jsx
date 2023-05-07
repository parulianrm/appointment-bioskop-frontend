import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  let location = useLocation();
  console.log(location);

  if (!location.state?.isAuthentication) {
    return <Navigate to="/forbidden-page" replace />;
  }
  return children;
};

export default ProtectedRoute;
