import React from 'react';
import '../style.scss';

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src="../../images/img.png" alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src="../../images/img.png" alt="" />      
      </div>
    </div>
  )
}

export default Message