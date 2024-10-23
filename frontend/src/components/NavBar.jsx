import React, { useState } from 'react'
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";

import avatarImg from "../assets/avatar.png"

const navigation = [
  {name: "Dashboard", href: "/dashboard"},
  {name: "Orders", href: "/orders"},
  {name: "Cart Page", href: "/cart"},
  {name: "Check Out", href: "/checkout"},
]

const currentUser = true
const NavBar = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false) 
  

  return (
    <header className='max-w-screen-2xl mx-auto px-4 py-6'>
      <nav className='flex justify-between items-center'>
        <div className='flex items-center md:gap-16 gap-4'>
          <HiMiniBars3CenterLeft size={24} />

          <div className='relative sm:w-72 w-40 space-x-2'>
            <IoIosSearch className='absolute inline-block left-3 inset-y-2'/>

            <input 
            type="text" placeholder="Search here"
            className='bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none'
            />
          </div>
        </div>

        <div className='relative flex items-center md:space-x-3 space-x-2'>
          <div>
            {
              currentUser ? <>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <img src={avatarImg} alt="avatar" className={`size-7 rounded-full ${currentUser ? 'ring-2 ring-blue-500' : ''}`} />
                </button>
                {
                  isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                      <ul className="py-2">
                        {
                          navigation.map((item) => (
                            <li key={item.name} onClick={() => setIsDropdownOpen(false)}>
                              <Link to={item.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{item.name}</Link>
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  )
                  
                }
              </> : <Link to={"/login"}><HiOutlineUser className='size-6' /></Link>
            }
          </div>
          
          <button className='hidden sm:block'>
            <FaRegHeart className='size-6' />
          </button>

          <Link to={"/cart"} className='bg-primary p-1 sm:px-6 px-2 flex items-center rounded-md'>
            <FiShoppingCart />
            <span className='text-sm font-semibold sm:ml-1'>0</span>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default NavBar