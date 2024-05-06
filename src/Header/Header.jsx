import React from 'react'
import { NavLink } from 'react-router-dom'


function Header() {
  return (
    <div className='h-24 border-1 border-red-600 flex justify-between pt-3 mx-24'>
        <div className='border-1 w-20 h-10 border-purple-300'><img className=' bg-cover' src='https://w7.pngwing.com/pngs/941/692/png-transparent-black-small-apple-logo-logo-material-apple-logo-black-thumbnail.png' alt="" /></div>
        <div className='border-1 border-purple-300'>
            <ul className='flex justify-between mt-2'>
                    <li className='mx-4  font-bold '>
                        <NavLink to="/" className={({isActive})=>`${isActive?"text-orange-500":"text-gray-700"} `}>
                                Menu
                        </NavLink>
                    </li>
                    <li className='mx-4  font-bold '>
                        <NavLink to="/location" className={({isActive})=>`${isActive?"text-orange-500":"text-gray-700"} `}>
                        Location
                        </NavLink>
                    </li>
                    <li className='mx-4  font-bold '>
                        <NavLink to="/About" className={({isActive})=>`${isActive?"text-orange-500":"text-gray-700"} `}>
                        About
                        </NavLink>
                    </li>
                    <li className='mx-4  font-bold '>
                        <NavLink to="/contactus" className={({isActive})=>`${isActive?"text-orange-500":"text-gray-700"} `}>
                        Contact
                        </NavLink>
                    </li>
            </ul>
        </div>
        <div className=''>
            <button className='mx-4 bg-red-600 py-1 px-4 mt-1 text-white font-medium'> Login </button>
        </div>
    </div>
  )
}

export default Header