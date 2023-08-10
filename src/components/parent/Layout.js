import React from 'react'

function Layout({ children }) {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="bg-gray-100 p-4 text-center w-1/2 h-2/3 flex flex-col items-center overflow-y-scroll">
                { children }
            </div>
        </div>  
    )
}

export default Layout