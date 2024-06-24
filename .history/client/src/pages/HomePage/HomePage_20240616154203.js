import React from 'react'
import ProminentArea from '../../components/ProminentArea/ProminentArea.tsx'
import PostingList from './components/PostingList.tsx'
import ItemSidebar from './components/HomeItem/ItemSidebar.js'
import { useSelector } from 'react-redux'
import { getCategories } from '../../redux/actions/app.js'

const HomePage = () => {
  const {categories} = useSelector(state => state.app)
  console.log(categories);

  return (
    <section className='w-1100 '>
      <div className='mb-[15px]'>
        <h1 className='flex justify-center text-[2rem] font-bold'>
          Tìm kiếm chỗ thuê ưng ý
        </h1>
        <p className='text-[15px] text-[#65676b] font-normal leading-normal'>
          Kênh thông tin Homestay số 1 Việt Nam - Website đăng tin cho thuê phòng trọ, nhà nguyên căn, căn hộ, ở ghép nhanh, hiệu quả với 100.000+ tin đăng và 2.500.000 lượt xem mỗi tháng.
        </p>
      </div>
      <div className='mb-[20px]'>
        <ProminentArea />
      </div>
      <section className='flex justify-around'>
        <div className='bg-[#fff] w-[70%] mr-[10px]'>
          <PostingList/>
        </div>
        <div className='bg-red-500 w-[30%]'>
          <ItemSidebar/>
          <ItemSidebar/>
          <ItemSidebar/>
        </div>
      </section>
    </section>
  )
}

export default HomePage