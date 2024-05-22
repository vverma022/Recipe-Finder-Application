import React from 'react'

const Header = () => {
  return (
    <div className='bg-black p-4 flex justify-between'>
     <h1 className='text-left font-bold text-white text-xl'>Recipe Finder</h1>
     <div  className=''>
      <input type='text' placeholder='Name Of Dish' className='rounded-md text-center cursor-text'/>
     </div>
        
    </div>
  )
}

export default Header
