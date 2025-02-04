'use client'
import React, { useState } from 'react'
import BundoIcon from '@/assets/svg2/bundoIcon'
import ShoppingCartIcon from '@/assets/svg2/shoppingCartIcon'
import Image from 'next/image'
import { Typography } from '@/components/typography'
import Hamburger from "@/assets/svg2/hamburger"
import countImage from "@/assets/images/Count.png"
import HomeModal from '@/components/home-modal'
import BigShoppingCartIcon from '@/assets/svg2/bigShoppingCartIcon'
export default function NavBar() {

const [isOpen, setIsOpen]= useState<boolean>(false);

  return (
        <section className=' relative max-w-[1214.833px] mx-auto flex justify-between items-center mxl:px-[24px] mxs:px-[18px] mxxs:px-[10px] mxs:bg-white mxs:shadow-md'>
            <div>
            <BundoIcon/>
            </div>
            <div className='flex items-center gap-[16px]'>
                <div className='flex items-center gap-1 mxs:hidden'>
                    <Typography font="sans" fontWeight="bold" variant="h-xs" color="chateau-green-500" className='leading-normal'>Marketplace</Typography>
                    <ShoppingCartIcon/>
                    <Image src={countImage} alt="count" width={21} height={17}/>
                </div>
                <div className='flex items-center gap-[5px] mxs:hidden'>
                    <Typography variant="c-l" fontWeight="semibold" color="palm-green-950" className='leading-[17.375px]'>Hi Michael!</Typography>
                    <div className='flex w-[50px] h-[50px] p-[9.375px] flex-col justify-center items-center bg-[#34A853] rounded-[78.125px]'>
                        <Typography variant="h-m" fontWeight="bold" color="white" className='leading-[21.875px]'>M</Typography>
                    </div>
                </div>
                <div className='flex w-[56px] h-[45px] justify-center items-center gap-[10px]'>
                <BigShoppingCartIcon/>
                </div>
                <div className='flex w-[56px] h-[45px] justify-center items-center gap-[10px] cursor-pointer ' onClick={()=>{setIsOpen((props)=>!props)}}>
                <Hamburger/>
                </div>
                {isOpen && <HomeModal isOpen={isOpen} onClose={() => setIsOpen(false)} />}
            </div>
        </section>
  )
}
