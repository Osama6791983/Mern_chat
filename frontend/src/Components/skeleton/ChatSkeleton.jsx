import React from 'react'

const ChatSkeleton = () => {
  return (
    <>
    <div className="flex flex-col  w-full">
    <div className="flex gap-2  items-center mb-4">
      <div className="skeleton w-8 h-8 rounded-full shrink-0 gap-4"></div>
      <div className="flex flex-col gap-2">
        <div className="skeleton h-4 w-20"></div>
        <div className="skeleton h-4 w-28"></div>
      </div>
    </div>
    
  </div>

  <div className="flex flex-col  w-full">
    <div className="flex gap-2  items-center mb-4">
      <div className="skeleton w-8 h-8 rounded-full shrink-0 gap-4"></div>
      <div className="flex flex-col gap-2">
        <div className="skeleton h-4 w-20"></div>
        <div className="skeleton h-4 w-28"></div>
      </div>
    </div>
    
  </div>

  <div className="flex flex-col  w-full">
    <div className="flex gap-2  items-center mb-4">
      <div className="skeleton w-8 h-8 rounded-full shrink-0 gap-4"></div>
      <div className="flex flex-col gap-2">
        <div className="skeleton h-4 w-20"></div>
        <div className="skeleton h-4 w-28"></div>
      </div>
    </div>
    
  </div>
    </>
  )
}

export default ChatSkeleton