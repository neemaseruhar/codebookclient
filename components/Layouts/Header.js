import React from 'react'
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import {Search} from '../Sections/Search'
import { DropdownLoggedIn } from '../Elements/DropdownLoggedIn';
import { DropdownLoggedOut } from '../Elements/DropdownLoggedOut';
import { useCart } from '../../context/CartContext';


export const Header = () => {
  const {cartList} = useCart();

  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);
  const[search,setSearch] = useState(false)
  const[dropdown,setDropdown] = useState(false)
  const token = JSON.parse(sessionStorage.getItem("token"))

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    
    if(darkMode){
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <header>
        <nav className ="bg-white border-gray-200 dark:bg-gray-900">
            <div  className ="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <Link to="/" className ="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={Logo} className ="h-8" alt="Code Book Logo" />
                    <span className ="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Code Book</span>
                </Link>
                <div className ="flex items-center space-x-6 rtl:space-x-reverse relative ">
                    <span onClick={() =>setDarkMode(!darkMode)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"></span>
                    <span onClick={() => setSearch(!search)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"></span>
                    <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
                    <span className="text-2xl bi bi-cart relative">
                      <span className="text-red text-sm absolute -top-1 left-2.5 bg-rose-700 px-1 rounded-full ">{cartList.length}</span>
                    </span>                    
                  </Link>
                    <span onClick={() => setDropdown(!dropdown)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi  bi-person-circle"></span>
                    {dropdown && (token ?<DropdownLoggedIn setDropdown={setDropdown} /> :<DropdownLoggedOut setDropdown={setDropdown}/>)}
                </div>
            </div>
        </nav>
        {search && <Search  setSearch={setSearch}/>}
        
    </header>
  )
}
