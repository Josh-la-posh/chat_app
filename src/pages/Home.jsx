import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import { projectID } from '../data/data';
import '../style.scss';
import Sidebar from '../components/Sidebar';
import ChatForm from '../components/ChatForm';
import ChatFeed from '../components/ChatFeed';
// import ChatList from '../components/ChatList';

const Home = () => {
  return (
    <div className='home'>
        <div className="container">
          <ChatEngine
            height='100vh'
            projectID = {projectID}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatList={(chatAppState) => <Sidebar {...chatAppState} />}
            // renderNewChatForm={(creds) => <ChatForm creds={creds} />}
            // renderChatCard={(chat, index) => <ChatList chat={chat} index={index} />}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
          />
        </div>
    </div>
  )
}

export default Home;