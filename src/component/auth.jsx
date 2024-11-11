import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../feature/authSlice';
import '../App.css'

const Auth = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const handleAuth = () => {
    isAuthenticated ? dispatch(logout()) : dispatch(login());
  };

  return (
    <div className="auth-container">
      <button className="auth-button" onClick={handleAuth}>
        {isAuthenticated ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

export default Auth;