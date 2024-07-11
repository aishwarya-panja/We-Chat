import React, { useContext } from 'react'
import Man from '../img/man.png'
import Dog from '../img/dog.jpg'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'

const Message = ({message}) => {

  const {currentUser} = useContext(AuthContext);
  const {data} = useContext(ChatContext);
  return (
    <div className='message'>
      <div className='messageInfo'>
        <img src={Man} alt='' />
        <span>just now</span>
      </div>
      <div className='messageContent'>
        <p>Hello! How are you?</p>
        <img src={Dog} alt='' />
      </div>
    </div>
  )
}

export default Message