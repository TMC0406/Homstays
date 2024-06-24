import React from 'react'
import ProminentArea from '../../components/ProminentArea/ProminentArea.tsx'
import PostingList from './components/PostingList.tsx'
import ItemSidebar from './components/HomeItem/ItemSidebar.js'
import {useDispatch} from 'react-redux'
import { apiGetCategories } from '../../service/category.js'
// import * as actionTypes from './actionTypes.js'


const HomePage = () => {
  const dispatch = useDispatch()
  apiGetCategories()
  console.log( apiGetCategories());
  const categories = async () => {
    try {
      const response = await apiGetCategories()
      console.log(response);
      // if (response?.data.error === 0) {
      //     dispatch({
      //         type: actionTypes.GET_CATEGORY,
      //         categories: response.data.response
      //     })
      // }else{
      //     dispatch({
      //         type: actionTypes.GET_CATEGORY,
      //         msg: response.data.msg,
      //         categories: null
      //     })
      // }
  } catch (error) {
      // dispatch({
      //     type: actionTypes.GET_CATEGORY,
      //     categories: null
      // })
  }}
  
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
          {/* <ItemSidebar content={categories} title='Danh sách cho thuê'/> */}
          <ItemSidebar/>
          <ItemSidebar/>
        </div>
      </section>
    </section>
  )
}

export default HomePage