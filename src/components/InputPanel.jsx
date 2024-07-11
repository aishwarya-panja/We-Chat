import React, { useContext } from 'react'
import Add from '../img/add (2).png'
import Attach from '../img/attachment.png'
import { AuthContext } from '../context/AuthContext'

const InputPanel = () => {

  const {currentUser} = useContext(AuthContext);
  return (
    <div className='input'>
      <input type='text' placeholder='Type something...' />
      <div className='send'>
        <input type='file' style={{display:"none"}} id='file' />
        <label htmlFor='file'>
          <img src={Attach} alt='' />
        </label>

        <input type='file' style={{display:"none"}} id='file' />
        <label htmlFor='file'>
          <img src={Add} alt='' />
        </label>

        <button>Send</button>
      </div>
    </div>
  )
}

export default InputPanel