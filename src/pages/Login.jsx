import React from 'react';
import '../style.scss';

const Login = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className="logo">Posh Chat</span>
            <span className="title">Login</span>
            <form>
                <input type="text" placeholder='Username / Email' minLength={3} required />
                <input type="password" placeholder='Password' required/>
                <button>Sign in</button>
            </form>
            <p>You don't have an account? Register</p>
        </div>
    </div>
  )
}

export default Login;