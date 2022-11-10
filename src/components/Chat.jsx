import React from 'react'
import Input from './Input';
import Messages from './Messages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span className="username">Joshua</span>
        <div className="chatInfoIcons">
          <FontAwesomeIcon icon="video"/>
          <FontAwesomeIcon icon="user-plus"/>
          <FontAwesomeIcon icon="ellipsis"/>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat;