import React from 'react'
import Header from './Header/Header.tsx'
import Footer from './Footer/Footer.tsx'
 export default  function DefaultLayOut ({children}) {
  return (
    <div className='Page relative bg-[#f5f5f5 top-[90px] ]'>
        <Header/>
        <main className='mainPage min-h-[100vh] pt-[100px] w-[1100px] mx-auto mt-[20px] '>
          {children}
        </main>
        <Footer/>
    </div>
  )
}
