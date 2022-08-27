import React from 'react'
import beachvid from '../assets/beachVid.mp4'
import { AiOutlineSearch } from "react-icons/ai"
function Back() {
    return (
        <div className='w-full h-screen relative'>
            <video
                className='w-full h-full object-cover'
                src={beachvid}
                autoPlay
                muted
                loop/>
                <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>


                <div className='absolute w-full h-full top-0 flex flex-col justify-center text-white text-center p-4'>
                    <h2>First Class Travel</h2>
                    <h3 className='py-4'>Top 1% Locations Worldwide</h3>
               <form className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md bg-gray-100/90 text-black'>
                <div>
                <input className='focus:outline-none font-[Poppin] sm:w-[400px] w-[300px] bg-transparent' placeholder='Search Destinations' type='text'/>

                </div>
                <div>
                    <button><AiOutlineSearch size={20} className='icon' style={{color:"#ffff"}}/></button>
                </div>
               </form>
                </div>
        </div>
    )
}

export default Back
