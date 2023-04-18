import React, { useContext } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Login = () => {
  const { signIn } = useContext(AuthContext)
  
  
  const handleLogIn = event => {
    event.preventDefault()


    const form = event.target
    const email = form.email.value
    const password = form.password.value
    
    signIn(email, password)
      .then(result => {
        const loggedUser = result.user
        console.log(loggedUser);
        form.reset()
      })
      .catch(error => {
      console.log(error);
    })
  }
  return (
    <div className='form-container'>
      <h1 className='form-title'>Log In</h1>
      <form onSubmit={handleLogIn}>
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