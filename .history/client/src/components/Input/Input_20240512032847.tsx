import React from 'react'

const Input = ({label}) => {
  return (
    <div className='mb-[20px]'>
        <label htmlFor="phone" className='text-[13px] font-normal mb-[5px]'>{label}</label>
        <input type="text" id='phone' className='outline-none bg-[#e8f0fe] p-2 rounded-md w-full' />
    </div>
  )
}

export default Input