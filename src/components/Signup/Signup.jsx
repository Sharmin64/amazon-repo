import React, { useState } from 'react';
import './Signup.css'
import { Link } from 'react-router-dom';

const Signup = () => {
  const [error, setError]=useState('')
  const handleSignUp = (event) => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value
    const confirm = form.confirm.value
    console.log(email, password, confirm);

    if (password !== confirm) {
      setError('please confirm password')
      return
    } else if (password.length < 8) {
      setError('your password must be 8 charactar or longer.')
      return
    }
  }
  return (
    <div className='form-container'>
      <h1 className='form-title'>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input className='form-field' type="email" name="email" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input className='form-field' type="password" name="password" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="confirm"> Confirm Password</label>
          <input className='form-field' type="password" name="confirm" id="" required />
        </div>
        <input className='btn-submit' type="submit" value="Sign Up" />
      </form>
      <p className='form-para'> <small>Already have an account? Please <Link to='/login'>Login</Link></small></p>
      <p className='text-error'>{error}</p>
    </div>
  );
};

export default Signup;