import React from 'react'
import InputSearch from '../../components/InputSearch/InputSearch.tsx'
import icon from '../../ultils/icon.js'

const {MdOutlineNavigateNext} = icon

const SearchPage = () => {
  return (
    <div className='h-[55px] flex p-[10px] bg-[#febb02] rounded-[8px] items-center justify-around text-[13px] '>
      <InputSearch IconBefore={undefined} IconAfter={undefined} text={'Loại'}/>
      <InputSearch IconBefore={undefined} IconAfter={<MdOutlineNavigateNext/>} text={'Địa chỉ'}/>
      <InputSearch IconBefore={undefined} IconAfter={<MdOutlineNavigateNext/>} text={'Chọn giá'}/>
      <InputSearch IconBefore={undefined} IconAfter={<MdOutlineNavigateNext/>} text={'Chọn diện tích'}/>
      Search
    </div>
  )
}

export default SearchPage