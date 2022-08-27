import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  FaFacebook,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
  FaYoutubeSquare,
} from "react-icons/fa";
function Navbar() {
  const [nav,setNav]=useState(false)
  const [logo, setLogo] = useState(false);

   const handleNav=()=>{
    setNav(!nav)
    setLogo(!logo)
   }
  return (
    <div className="flex justify-between items-center absolute z-10 px-4 text-white w-full">
      <div>
        <h1 onClick={handleNav}  className={logo ? "hidden" : "block"}>BEACHES.</h1>
      </div>
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>Destinations</li>
        <li>Travel</li>
        <li>View</li>
        <li>Block</li>
      </ul>
      <div className="hidden md:flex">
        <BsPerson className="mr-2" size={20} />
        <BiSearch size={20} />
      </div>
      {/* Hamburger */}
      <div onClick={handleNav} className="md:hidden z-10" >
        {nav ? <AiOutlineClose  size={20} className="text-black"/> :<HiOutlineMenuAlt4 size={20} />}
      
      </div>
      {/* mobile menu */}
      <div onClick={handleNav} className={nav ? "absolute left-0 top-0 w-full bg-gray-100/90 px-5 flex-col text-black"  : "absolute left-[100%]"}>
        <ul>
          <h1>BEACHES.</h1>
          <li className='border-b'>Home</li>
          <li className='border-b'>Destinations</li>
          <li className='border-b'>Travel</li>
          <li className='border-b'>View</li>
          <li className='border-b'>Block</li>
          <div className='flex flex-col'>
            <button className='my-5'>Search</button>
            <button>Acount</button>
          </div>
          <div className="flex justify-between my-6">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaInstagram className="icon" />
            <FaPinterestP className="icon" />
            <FaYoutubeSquare className="icon" />
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
