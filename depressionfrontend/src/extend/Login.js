import React from 'react';
import { auth, provider } from '../firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './log.css'; // Import your CSS file for styling

const Login = ({ setIsAuth }) => {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        localStorage.setItem('isAuth', 'true');
        setIsAuth(true);
        navigate('/');
      })
      .catch(error => {
        console.error('Sign in error:', error);
        alert('There was an error signing in. Please try again.');
      });
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h2 className="login-title">Sign In With Google to Continue</h2>
        <button className="login-with-google-btn" onClick={signInWithGoogle}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default Login;

