import React from 'react';
import '../style.scss';

const MyMessage = (message) => {
  if (message.attachments?.length > 0) {
    return (
      <img src={message.attachments[0].file}
           alt="message-attachment"
            className="message-image"
            style={{float: 'right'}}
      />
    )
  }

  return (
    <div className="messages">
      <div className='message owner'>
        <div className="messageInfo">
          <img src="../../images/img.png" alt="" style={{width:'40px', borderRadius:'50%'}}/>
          <span>just now</span>
        </div>
        <div className="messageContent">
          <p>{message.text}</p>
        </div>
      </div>
    </div>
  )
}

export default MyMessage;