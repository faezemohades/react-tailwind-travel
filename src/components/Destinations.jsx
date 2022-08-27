import React from 'react'
import BoraBora from '../assets/borabora.jpg'
import BoraBora2 from '../assets/borabora2.jpg'
import Maldives from '../assets/maldives.jpg'
import Maldives2 from '../assets/maldives2.jpg'
import keyWest from '../assets/keywest.jpg'

function Destinations() {
    
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 text-center">
        <h1>All-Inclusive Resorts</h1>
        <p className='py-4'>On the Caribbean's Best Beaches</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 md:gap-4'>
            <img src={BoraBora} className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2'/>
            <img src={BoraBora2} className='w-full h-full object-cover'/>
            <img src={Maldives} className='w-full h-full object-cover'/>
            <img src={Maldives2} className='w-full h-full object-cover'/>
            <img src={keyWest} className='w-full h-full object-cover'/>

        </div>
      
    </div>
  )
}

export default Destinations
