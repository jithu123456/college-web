import React from 'react'
import logo from './logo1.png'
import { AiFillCalendar } from "react-icons/ai";

const Home = () => {
  return (
    <div className=' max-w-[100vw] min-h-[100vh] overflow-hidden relative'>
        <div className=' fixed left-0 col-span-3 bg-gray-700 h-full'>
            <div className=' flex items-center justify-center'>
            <img src={logo} alt='logo' className=' h-[5rem] w-[5rem] flex justify-center items-center bg-gray-800' />
            </div>
            <div className=' bg-white'><AiFillCalendar />
            <button className=' border-none p-5 bg-gray-700 h-14 w-48 flex items-center justify-start text-white'>Dashboard</button></div>
            <div className=' border-none p-5 bg-gray-700 h-14 w-48 flex items-center justify-start text-white'>Circulars </div>
            <div className=' border-none p-5 bg-gray-700 h-14 w-48 flex items-center justify-start text-white'>Events</div>
            <div className=' border-none p-5 bg-gray-700 h-14 w-48 flex items-center justify-start text-white'>Calendar</div>
            <div className=' border-none p-5 bg-gray-700 h-14 w-48 flex items-center justify-start text-white'>Time Table</div>
            <div className=' border-none p-5 bg-gray-700 h-14 w-48 flex items-center justify-start text-white'>Media Center</div>
            <div className=' border-none p-5 bg-gray-700 h-14 w-48 flex items-center justify-start text-white'>Students</div>
            <div className=' border-none p-5 bg-gray-700 h-14 w-48 flex items-center justify-start text-white'>Academics</div>
            <div className=' border-none p-5 bg-gray-700 h-14 w-48 flex items-center justify-start text-white'>Invoicing</div>
            <div className=' bg-black flex bottom-0 text-gray-400 p-5'>
              fdkn

            </div> 
            <div className=' bg-black start-4 text-white'>LSIFJIJGIV

        </div>
        
          

          
        </div>
      
    </div>
  )
}

export default Home

