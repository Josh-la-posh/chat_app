import React from 'react';
import '../style.scss';

const MyMessage = ({message}) => {
  if (message?.attachments?.length > 0) {
    <div className="messages">
      <div className='message owner'>
        <div className="messageContent">          
          <img src={message.attachments[0].file}
            alt="message-attachment"
              className="message-image"
              style={{float: 'right'}}
          />
        </div>
      </div>
    </div>
  }
  return (    
    <div className="messages">
      <div className='message owner'>
        <div className="messageContent">      
          <p>{message.text}</p>
        </div>
      </div>
    </div>
  )
}

export default MyMessage;