import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
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
      url: 'https//api.chatengine.io/chats/',
      header: {
        'Project-ID': "c8c9a35b-ff5f-492d-9c35-b91872e3383e",
        'User-Name': username,
        'User-Secret': password,
      },
    }
    window.location.reload();
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    axios(config)
    .then(function(response) {
      console.log(JSON.stringify(response.data))
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
          <button type='submit'><Link to='/'>Start Chatting</Link></button>
        </form>
        <h2 className='error'>{error}</h2>
        <p>You don't have an account? <a href='/register'>Register</a></p>
      </div>
    </div>
  )
}

export default Login;