import React from 'react';
import '../style.scss';

const TheirMessage = ({lastMessage, message}) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
    return (
        <div>
            {isFirstMessageByUser && (
                <img src={message?.sender?.avatar} alt="" style={{width:'20px', height:'20px', borderRadius:'50%', float:'left' }} />
            )}
            {
                (message.attachments.length > 0)
                ?
                <div className="messages">
                    <div className='message'>
                        <div className="messageContent">
                            <img src={message.attachments[0].file}
                                alt="message-attachment"
                                className="message-image"
                                style={{marginRight: isFirstMessageByUser ? '4px' : '25px', width:'80px'}}
                            />        
                        </div>
                    </div>
                </div>
                :
                <div className="messages">
                    <div className='message'>
                        <div className="messageContent" style={{marginLeft: isFirstMessageByUser ? '4px' : '25px'}}>
                            <p>{message.text}</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default TheirMessage;