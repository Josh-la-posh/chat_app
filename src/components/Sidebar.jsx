import React from 'react';
import { ChatList } from 'react-chat-engine';
import Navbar from './Navbar';
import Search from './Search';
import Chats from './ChatList';
import ChatForm from './ChatForm';

const Sidebar = (props) => {
  return (
    <div className='sidebar'>
      <Navbar {...props} />
      <Search {...props} />
      {/* <ChatList {...props} /> */}
      <Chats {...props} />
      {/* <ChatForm /> */}
    </div>
  )
}

export default Sidebar;