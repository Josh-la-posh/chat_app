import React, { useState } from 'react';
import { PrivateKey } from '../data/data';
import '../style.scss';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    var axios = require('axios');
    var data = {
      "username": username,
      "secret": password,
      "email": email,
    };
    var config = {
      method: 'post',
      url: 'https://api.chatengine.io/users/',
      headers: {
        'PRiVATE-KEY': `{${PrivateKey}}`
      },
      data:data
    }
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

  
    axios(config)
    .then(function(response) {
      console.log(JSON.stringify(response.data));
    }).catch(function (error) {
      console.log(error);
    })

    setUsername('')
    setPassword('')
    setEmail('')
  }

  
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className="logo">Posh Chat</span>
            <span className="title">Register</span>

            {/* FORM */}

            <form onSubmit={handleSubmit}>
                <input type="text" 
                      placeholder='Username'
                      value={username}
                      onChange={(e)=>setUsername(e.target.value)}
                      minLength={3} required />
                <input type="email" 
                      placeholder='Email'
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                      required/>

                {/* <input type="tel" placeholder='Phone No' required pattern='[+]{1}[0-9]{11,14}' /> */}
                <input type="password"
                      placeholder='Password'
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
                      required/>
                <input type="file" id='file' style={{display: 'none'}} />
                <label htmlFor="file">
                  <img src="../../images/file.png" alt="" />
                  <span>Add an avatar</span>
                  </label>
                <button type='submit'>Sign up</button>
            </form>
            <p>You do have an account? <a href='/login'>Login</a></p>
        </div>
    </div>
  )
}

export default Register;