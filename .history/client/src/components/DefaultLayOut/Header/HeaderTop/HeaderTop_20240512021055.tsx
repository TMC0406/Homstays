import React, {useCallback} from "react"
import {Link} from "react-router-dom"
import Button from "../../../Button/Button.tsx"
import { useNavigate } from "react-router-dom"
import { path } from "../../../../ultil/contant.tsx"

const HeaderTop = () => {
  const navigate = useNavigate()
  const goLogin = useCallback(()=>{
    navigate(path.LOGIN)
  },[])
  return (
    <div className='HeaderTop'>
      <div  className='header-container flex justify-around'>
        {/* //////// LOGO /////////// */}
        <div className='header-logo'>
          <Link to="/">
            <img className='logo-img' src="" alt="Logo "/>
          </Link>
        </div>
        <div>
          <Button
            text={"Đăng nhập"}
            textColor='text-[#ffffff]'
            bgColor={'bg-[#3961FB]'}
            onClick={goLogin}
          />

          <Button
            text={"Đăng ký"}
            textColor={"text-[#ffffff]"}
            bgColor={'bg-[#3961fb]'}
            onClick={goLogin}
          />
        </div>

        {/* ////////// USE ///////// */}
      </div>
    </div>
  )
}

export default HeaderTop