import React from 'react'

const Information = () => {
  return (
    <div className="">
      <h1  className='text-[30px] font-[600]'>Cập nhật thông tin cá nhân</h1>
      <form className="p-[30px] w-[70%]">
        <table className='w-[70%] m-[auto] border-spacing-3'>
          <tr>
            <td><label className='font-[500] text-[1.2rem]' htmlFor="id">Mã thành viên</label></td>
            <td>
              <input type="text" className='border-[2px] min-w-[100%]' id='id' />
            </td>
          </tr>
          <tr>
            <td><label className='font-[500] text-[1.2rem]' htmlFor="phone">Số điện thoại</label></td>
            <td>
              <input type="text" className='border-[2px] min-w-[100%]' id='phone' />
              <p className='text-blue-500 font-[700]'> Đổi số điện thoại</p>
            </td>
          </tr>
          <tr>
            <td><label className='font-[500] text-[1.2rem]' htmlFor="username">Tên hiển thị</label></td>
            <td>
              <input type="text" className='border-[2px] min-w-[100%]' id='username' />
            </td>
          </tr>
          <tr>
            <td><label className='font-[500] text-[1.2rem]' htmlFor="Email">Email</label></td>
            <td>
              <input type="text" className='border-[2px] min-w-[100%]' id='Email' />
            </td>
          </tr>
          <tr>
            <td><label className='font-[500] text-[1.2rem]' htmlFor="zalo">Số Zalo</label></td>
            <td>
              <input type="text" className='border-[2px] min-w-[100%]' id='zalo' />
            </td>
          </tr>
          <tr>
            <td><label className='font-[500] text-[1.2rem]' htmlFor="password">Mật khẩu</label></td>
            
            <td>
              <input type="text" className='border-[2px] min-w-[100%]' id='password' />
              <p className='text-blue-500 font-[700]'>Đổi mật khẩu</p>
            </td>
          </tr>
          <tr>
            <td><label className='font-[500] text-[1.2rem]' htmlFor="changeAvatar">Ảnh đại diện</label></td>
            <td>
              <input type="text" className='border-[2px] min-w-[100%]' id='changeAvatar' />
            </td>
          </tr>
          <tr>
            <td>
                <button className='w-[100%] h-[50px] text-center'>Lưu thay đổi & Cập nhập</button>
            </td>
            </tr>
        </table>
      </form>
    </div>
  )
}

export default Information