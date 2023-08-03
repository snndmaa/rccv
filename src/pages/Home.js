import React from 'react'

function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
        <div className="bg-gray-100 p-4 text-center w-1/2 h-1/3 flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-blue-600">
                Welcome to the RCCV Software
            </h1>
            <p className="text-gray-800 mt-2">Revolutionalizing customer service one click at a time.</p>
            <br />
            <a href="/users" className='text-sky-800'>View Users</a>
            <a href="">Dashboard</a>
        </div>
    </div>    
  )
}

export default Home