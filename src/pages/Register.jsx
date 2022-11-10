import React from 'react';
import '../style.scss';

const Register = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className="logo">Posh Chat</span>
            <span className="title">Register</span>
            <form>
                <input type="text" placeholder='Username' minLength={3} required />
                <input type="email" placeholder='Email' required/>
                <input type="password" placeholder='Password' required/>
                <input type="file" id='file' style={{display: 'none'}} />
                <label htmlFor="file">
                  <img src="../../images/file.png" alt="" />
                  <span>Add an avatar</span>
                  </label>
                <button>Sign up</button>
            </form>
            <p>You do have an account? Login</p>
        </div>
    </div>
  )
}

export default Register;