import React from 'react'
import email_logo from '../../assets/images/logo/email_logo.png'
import phone_logo from '../../assets/images/logo/phone_logo.png'
import user_image from '../../assets/images/user.png'

function UserItem({ user : { images, name, email, primaryContactInfo } }) {
  return (
    <div className="flex flex-row items-center w-full h-1/4 rounded-lg bg-slate-200 my-1.5">
        <div className="rounded-full w-20 h-5/6 m-4 flex justify-center items-center">
            <img src={
                images 
                ? images[0].imageUri 
                : user_image
            } alt="" className='w-full h-full rounded-full' />
        </div>
        <div className="h-5/6 flex flex-col items-start m-0 p-0">
        <h1 className='font-semibold text-2xl text-slate-500'>
            {name}
        </h1>
        <div className=" flex flex-row items-start ">
            <img className='w-7 h-7' src={email_logo} alt="email_logo"/>
            <a href="" className='ml-1 text-teal-700 underline'>{email}</a>
            <img className='w-7 h-7 ml-4' src={phone_logo} alt="phone_logo" />
            <a href='' className='text-teal-700 underline'>
                {
                    primaryContactInfo[1] 
                    ? primaryContactInfo[1].display
                    : 'Not Available'
                }
            </a>
            
            {/* {console.log(users[0].users.entities[0])} */}
        </div>
        </div>
    </div>
  )
}

export default UserItem