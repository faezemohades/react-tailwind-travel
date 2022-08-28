import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
  FaYoutubeSquare,
} from "react-icons/fa";
function Footer() {
  return (
    <div className="w-full bg-gray-100 py-16 ">
      <div className="flex flex-col mx-auto px-4 max-w-[1240px]">
        <div className="sm:flex justify-between text-center items-center">
          <h1>BEACHES.</h1>
          <div className="flex justify-between w-full sm:max-w-[280px] my-4">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaInstagram className="icon" />
            <FaPinterestP className="icon" />
            <FaYoutubeSquare className="icon" />
          </div>
        </div>
        <div className='flex justify-between' >
          <ul className=" lg:flex">
            <li>About</li>
            <li>Partnerships</li>
            <li>Careers</li>
            <li>Newsroom</li>
            <li>Advertising</li>
          </ul>
          <ul className="text-right lg:flex">
            <li>Home</li>
            <li>Destinations</li>
            <li>Travel</li>
            <li>View</li>
            <li>Block</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
