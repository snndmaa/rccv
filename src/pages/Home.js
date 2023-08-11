import React from 'react'

import Navbar from '../components/menu/Navbar'


function Home() {
  return (
    <>
    <Navbar/>
    <div className="w-full h-screen flex justify-center items-center">
        <div className="bg-gray-300 p-4 text-center w-1/2 h-1/3 flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-blue-600">
                Welcome to the iRCCV Software
            </h1>
            <p className="text-gray-800 mt-2">Revolutionalizing customer service one click at a time.</p>
            <br />
            <a href="/login" className='text-sky-800'>Login</a>            
            <a href="/users" className='text-sky-800'>View Users</a>
            <a className='text-sky-800' href="/dashboard">Dashboard</a>
            <a className='text-red-800' href="/test">test</a>
        </div>
    </div>    
    </>
  )
}

export default Home