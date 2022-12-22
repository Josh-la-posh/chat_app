import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import '../style.scss';
import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat';
import Login from './Login';

const Home = () => {
  return (
    <div className='home'>
      {console.log(localStorage.getItem('username'))}
        <div className="container">
          {/* <Sidebar />
          <Chat /> */}

          <ChatEngine
            height='100vh'
            projectID='c8c9a35b-ff5f-492d-9c35-b91872e3383e'
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <Chat {...chatAppProps} />}
          />
        </div>
    </div>
  )
}

export default Home


// Project Id : c8c9a35b-ff5f-492d-9c35-b91872e3383e
// Username : La_Posh
// User secret : Young 23