import React from 'react';
import Login from './Login';

export default function Register({ setActivePage, setCurrentUser }) {
  return (
    <Login
      initialMode="signup"
      setActivePage={setActivePage}
      setCurrentUser={setCurrentUser}
    />
  );
}

