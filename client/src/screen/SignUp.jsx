import React from 'react'
import logo from './logo.jpeg'
import pad from './padlock.png'

const SignUp = () => {
  return (
    <div>
      <div className='flex flex-col max-w-[100vw] min-h-[100vh] p-10 overflow-hidden  justify-center items-center bg-gradient-to-t from-blue-900 to-blue-500'>
      <div className=' flex flex-col bg-white h-[30rem] w-[25rem] rounded-1xl'>
        <div className='flex items-center flex-col'>
          <img src={logo} alt='logo'  />
          <div className='p-3 pb-10'><input type='text' placeholder='Username/ E-mail' className='w-[21rem] border-b-2 border-gray-400 placeholder:text-gray-400'></input></div>
          <div><input type='text' placeholder='Password' className='w-[21rem] border-b-2 border-gray-400 placeholder:text-gray-400' ></input></div>
        </div>
        <div className='grid grid-cols-2'>
          <div className='py-5 pl-12'>
          <input type='checkbox' className=' px-5 border-2 border-slate-500 accent-indigo-500'></input><label>Remember me</label>
        </div>
        <div className='py-5 pr-12'>
          <div className='flex justify-end'>
          <img src={pad} alt='lock' className='h-3 w-3'/> <p className=' pl-2'>Reset  Password</p>
          </div>
        </div>
        </div>
        <div className='flex justify-center'>
        <button className=' w-[22rem] h-12 border-2 text-white text-2xl border-gray-400 bg-gradient-to-r from-red-500 to-pink-500'>SIGN IN</button></div>
        <div className=' grid grid-cols-2 p-5'>
          <div className=' text-blue-500 pl-2'>Terms of Service</div>
          <div className=' text-indigo-500 flex justify-end pr-2'>Portal Site</div>

        </div>
      </div>
      <div className=' flex flex-col bg-white  rounded-1xl w-[25rem] border-gray-400 pt-2'>
      PUC-1 & PUC-2 students of previous AY: 2023-24 should Login Here to view 2023-24 details and pay pending invoices.

      </div>
      
      
      
    </div>
    </div>
  )
}

export default SignUp
