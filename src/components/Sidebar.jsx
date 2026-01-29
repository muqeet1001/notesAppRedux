import React from 'react'

function Sidebar() {
  return (
       
      <div className="l mt-15 w-20 flex flex-col items-center justify-between py-6 border-r">
        <div className="flex flex-col gap-4 items-center">
          <button className="
            w-10 h-10 bg-black text-white rounded-full text-3xl
            flex items-center justify-center
            transition-transform duration-300 hover:scale-110
          ">
            +
          </button>

          <div className="w-10 h-10 rounded-full bg-orange-300"></div>
          <div className="w-10 h-10 rounded-full bg-pink-300"></div>
          <div className="w-10 h-10 rounded-full bg-purple-300"></div>
          <div className="w-10 h-10 rounded-full bg-blue-300"></div>
          <div className="w-10 h-10 rounded-full bg-green-300"></div>
        </div>
        </div>
  )
}

export default Sidebar;