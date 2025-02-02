import React from 'react'
import FooterHeader from './footerHeader'
import FooterBody from './footerBody'

export default function Footer() {
  return (
    <div className='mt-[60px] bg-[#fff] max-w-[1214.833px] mx-auto pt-[50px] flex flex-col gap-[35px] mlg:px-[24px] mxxs:px-[10px]'>
        <FooterHeader/>
        <FooterBody/>
    </div>
  )
}
