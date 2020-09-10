import React, { useState } from 'react';
import './Login.css';
import AmazonLogo from '../images/Amazon-logo-login.jpg';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then(auth => {
        history.push('/');
      }).catch(err => {
        alert(err.message);
      });
  }
  const register = e => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email, password)
      .then(auth => {
        console.log(auth);
        if(auth) {
          history.push('/');
        }
      }).catch(err => {
        alert(err.message);
      })
  }

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={AmazonLogo} alt="Amazon logo" />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <h5>Password</h5>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >Sign In</button>
        </form>
        <p>
          By continuing, you agree to Amazon's CLONE Conditions of Use and Privacy Notice.
        </p>
        <button 
          className="login__registerButton"
          onClick={register}
        >Create your Amazon account</button>
      </div>
    </div>
  )
}

export default Login;