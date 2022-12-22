import React from 'react';
import '../style.scss';

const TheirMessage = ({lastMessage, message}) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
  
    return (
        <div>
            {isFirstMessageByUser && (
                <div 
                    className='message-avatar'
                    style={{backgroundImage: `url(${message?.sender?.avatar})`}}
                />
            )}
            {
                message?.attachments?.length > 0
                ?
                <div className="messages">
                    <div className='message'>
                        <div className="messageInfo">
                            <img src="../../images/img.png" alt="" />
                        </div>
                        <div className="messageContent">
                            <img src={message.attachments[0].file}
                                alt="message-attachment"
                                className="message-image"
                                style={{marginRight: isFirstMessageByUser ? '4px' : '48px', width:'80px', heihjt:'80px'}}
                            />
                        </div>
                    </div>
                </div>                
                :
                <div className="messages">
                    <div className='message'>
                        <div className="messageInfo">
                            {/* <img src="../../images/img.png" alt="" /> */}
                        </div>
                        <div className="messageContent">
                            <p>{message.text}</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default TheirMessage;