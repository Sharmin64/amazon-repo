import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='form-container'>
      <h1 className='form-title'>Log In</h1>
      <form>
        <div className="form-control">
          <label htmlFor="">Email</label>
          <input className='form-field' type="email" name="email" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="">Password</label>
          <input className='form-field' type="password" name="password" id="" required />
        </div>
        <input className='btn-submit' type="submit" value="Login" />
      </form>
      <p className='form-para'> <small>New to Amazon? <Link to='/signup'>Create New Account</Link></small></p>
    </div>
  );
};

export default Login;