import React from 'react'

function App() {
  return (

    <div className="main w-full h-screen flex items-center justify-around gap-20">

      <div className="l h-100  flex  justify-around items-center mr-10 gap-5">
        <div className='h-100 flex flex-col items-center justify-between'>
          <div className='w-10 h-10 bg-black text-white
          rounded-full  text-4xl flex items-center justify-center'>+</div>
          <div className='w-10 h-10 rounded-full bg-orange-300'></div>
          <div className='w-10 h-10 rounded-full bg-pink-300'></div>
          <div className='w-10 h-10 rounded-full bg-purple-300'></div>
          <div className='w-10 h-10 rounded-full bg-blue-300'></div>
          <div className='w-10 h-10 rounded-full bg-green-300'></div>
        </div>
        <div>
          <div className='w-0.5 bg-gray-300 h-120'></div>
        </div>
      </div>
     <div>
       <div className='text-4xl text-gray-700 mb-4 '>Notes</div>
        <div className="r w-[80%] h-100 flex gap-7">
        <div className="card w-80  h-80 bg-orange-300 rounded-3xl">
        </div>
         <div className="card w-80 h-80 bg-pink-300 rounded-3xl">
        </div>
         <div className="card  w-80 h-80 bg-purple-300 rounded-3xl">
        </div>
        
      </div>
     </div>

    </div>
  )
}

export default App