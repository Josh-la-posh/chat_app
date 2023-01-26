import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { sendMessage, isTyping } from 'react-chat-engine';

const Input = (props) => {

  const [value, setValue] = useState('');
  const {chatId, creds} = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = value.trim();

    if (text.length>0) sendMessage(creds, chatId, {text});

    setValue('');
  }

  const handleChange = (e) => {
    setValue(e.target.value);

    isTyping(props, chatId);
  }

  const handleUpload = (e) => {
    sendMessage(creds, chatId, {files: e.target.files, text: ''})
  }

  return (
    <form className='input' onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder='Send a message...'
            value={value}
            onChange={handleChange}
            onSubmit={handleSubmit} />

        <FontAwesomeIcon icon='paperclip' className='icon' />
        <input type="file" id='file' multiple={false} style={{display: 'none'}} onChange={handleUpload}/>
        <label htmlFor="file">
            <FontAwesomeIcon icon='file-lines' className='icon' />
        </label>
        <button type='submit'>Send</button>
    </form>
  )
}

export default Input;