import React from 'react'

const ChatList = (props) => {
  const {chats, activeChat, messages, renderChatFeeds,onClick} = props;
  const chat = chats && chats[activeChat];

  console.log(props)
  
  if (chat === null) {
    return "...loading";
  } else {
    return (
      Object.values(chats).map(({id, title, last_message}) => {
         return (
           <div className='chats' key={id} onClick={onClick}>
            <img src="../../images/img.png" alt="User" />
            <span>
              <p className='username'>{title}</p>
              <p className='message'>{
                last_message.text !== ""
                ? last_message.text
                : <span>image</span>
              }</p>
            </span>
          </div>
        )
      })
    )
  }
}

export default ChatList;