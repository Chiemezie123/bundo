'use Client'

import React from 'react'
import FAQheader from './FAQheader'
import FAQbody from './FAQbody'

export default function FAQ() {
  return (
    <div className='bg-[#F1E9DB] mx-auto flex flex-col items-center justify-center gap-[46px] px-[281px] mlg:px-[210px] mmd:px-[100px] py-[78px] w-full mxs:px-[24px] mxs:pb-[63px]'>
        <FAQheader/>
        <FAQbody/>
    </div>
  )
}
