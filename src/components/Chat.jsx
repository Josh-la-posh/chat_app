import React, {useState} from 'react'
import Input from './Input';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const Chat = (props) => {
  const {chats, activeChat, userName, messages} = props;
  const chat = chats && chats[activeChat];

  const readReceipt = (message, isMyMessage) => {
    return chat.people.map((person, index) => person.last_read === message.id && (
      <div 
          key={`read_${index}`}
          className='read-receipt'
          style={{float: isMyMessage ? 'right' : 'left', backgroundImage: `url(${person?.person?.avatar})`}}
      />
    ))
  }

  const renderMessages = () => {
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.username;

      return (
        <div key={`msg_${index}`} style={{width:'100%'}}>
          <div className='message-block'>
            {
              isMyMessage
              ? <MyMessage message={message}/>
              : <TheirMessage message={message} lastMessage={messages[lastMessageKey]}/>
            }
          </div>
          <div className="read-receipt" style={{marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px'}}>
            {readReceipt(message, isMyMessage)}
          </div>
        </div>
      )
    })
  }

  if (chat === null) {
    return '...Loading'
  }
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span className="username">{chat.title}</span>
        <div className="chatInfoIcons">
          <FontAwesomeIcon icon="video"/>
          <FontAwesomeIcon icon="user-plus"/>
          <FontAwesomeIcon icon="ellipsis"/>
        </div>
      </div>
      <div className="messageDisplay">
        {renderMessages()}
      </div>
      <Input {...props} chatId={activeChat}/>
    </div>
  )
}

export default Chat;