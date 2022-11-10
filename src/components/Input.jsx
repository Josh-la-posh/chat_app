import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Input = () => {
  return (
    <div className='input'>
        <input type="text" placeholder='Type something...' />
        <FontAwesomeIcon icon='paperclip' className='icon' />
        <input type="file" id='file' style={{display: 'none'}} />
        <label htmlFor="file">
            <FontAwesomeIcon icon='file-lines' className='icon' />
        </label>
        <button>Send</button>
    </div>
  )
}

export default Input