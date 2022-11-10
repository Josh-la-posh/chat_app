import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find a user' />
      </div>
      <div className="userChat">
        <img src="../../images/img.png" alt="" />
        <div className="userChatInfo">
          <span>Joshua</span>
        </div>
      </div>
    </div>
  )
}

export default Search