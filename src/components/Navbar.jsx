import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Posh Chat</span>
      <img src="../../images/img.png" alt="User" className='userimg' />
      <span className='username'>Joshua</span>
      <button>logout</button>
    </div>
  )
}

export default Navbar;