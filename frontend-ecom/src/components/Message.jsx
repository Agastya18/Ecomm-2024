import React from 'react'

const Message = ({message}) => {
  return (
    <div>
        <div className="bg-red-100 border border-red-400 text-red-700 p-4 rounded relative text-center shadow-sm text-xl" role="alert">
            <strong className="font-bold">{message}</strong>
        </div>
        

    </div>
  )
}

export default Message