import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-ful'>
            <img alt='profile pic' src={""} />
        </div>
      </div>
      <div className={'chat-bubble text-white bg-blue-500'}>Hare Krishna</div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:45</div>
    </div>
  )
}

export default Message
