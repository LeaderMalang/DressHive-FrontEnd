// Signup.js
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Signup = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <h2>Sign Up</h2>
      <p>Sign up is not supported directly. Please log in using an existing account or contact the administrator.</p>
      <button onClick={() => loginWithRedirect()}>Log In</button>
    </div>
  );
};

export default Signup;
