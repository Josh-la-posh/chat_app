import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectID } from '../data/data';
import '../style.scss';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    var axios = require('axios');
    var config = {
      method: 'get',
      url: 'https//api.chatengine.io/users/',
      header: {
        'Project-ID': {projectID},
        'User-Name': username,
        'User-Secret': password,
      },
    }
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    window.location.reload();
    
    axios(config)
    .then(function(response) {
      console.log(JSON.stringify(response))
    }).catch(function(err) {
      console.log(err)
    })
  }

  return (
    <div className='formContainer'>
      <div className="formWrapper">
        <span className="logo">Posh Chat</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="text" 
                placeholder='Username / Email'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                minLength={3} required />
          <input type="password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                placeholder='Password' required/>
          <button type='submit' onClick={handleSubmit}><Link to='/'>Start Chatting</Link></button>
        </form>
        <h2 className='error'>{error}</h2>
        <p>You don't have an account? <a href='/register'>Register</a></p>
      </div>
    </div>
  )
}

export default Login;