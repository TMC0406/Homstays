import React from 'react'

const ProminentArea = ({name, img}) => {
  return (
    <div className='w-[220px] shadow-lg'>
        <img 
        src="https://phongtro123.com/images/location_hcm.jpg" 
        alt={name} 
        className='w-full h-[110px] object-cover rounded-t-[10px]'
        />
        {/* <span>{name}</span> */}
        <span className='flex justify-center items-center py-[12px] px-[10px] bg-[#fff] rounded-b-[10px] font-bold'>Phòng trọ Hà Nội</span>
    </div>
  )
}

export default ProminentArea