import React, {memo} from 'react'

const InputSearch = ({IconBefore, IconAfter, text}) => {
  return (
    <div className='bg-[#fff] mx-[3px] rounded-[5px] h-[35px] w-full py-[10px] pr-[30px] pl-[22px] inline-flex items-center justify-between text-[#777] '>
          <div className='flex items-center'>
            <span className='mr-[5px]'> {IconBefore}</span>
            <span>  {text}</span>
          </div>
        {IconAfter}
    </div>
  )
}

export default memo(InputSearch)