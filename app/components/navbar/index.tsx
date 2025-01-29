'use client'
import React from 'react'
import BundoIcon from '@/assets/svg2/bundoIcon'
import BigShoppingCartIcon from '@/assets/svg2/bigShoppingCartIcon'
import ShoppingCartIcon from '@/assets/svg2/shoppingCartIcon'
import Hamburger from '@/assets/svg2/hamburger'
import Image from 'next/image'
import ShoppingImage from "@/assets/images/shopping bag.svg"
import Menu from '@/assets/images/Menu.svg'
import { Typography } from '@/components/typography'

export default function NavBar() {

  return (
        <section className='max-w-[1214.833px] mx-auto flex justify-between items-center'>
            <div>
            <BundoIcon/>
            </div>
            <div className='flex items-center gap-[16px]'>
                <div className='flex items-center gap-1'>
                    <Typography font="sans" fontWeight="bold" variant="h-xs" color="chateau-green-500" className='leading-normal'>Marketplace</Typography>
                    <ShoppingCartIcon/>
                </div>
                <div className='flex items-center gap-[5px]'>
                    <Typography variant="c-l" fontWeight="semibold" color="palm-green-950" className='leading-[17.375px]'>Hi Michael!</Typography>
                    <div className='flex w-[50px] h-[50px] p-[9.375px] flex-col justify-center items-center bg-[#34A853] rounded-[78.125px]'>
                        <Typography variant="h-m" fontWeight="bold" color="white" className='leading-[21.875px]'>M</Typography>
                    </div>
                </div>
                <div className='border flex w-[56px] h-[45px] justify-center items-center gap-[10px]'>
                <Image src={ShoppingImage} alt='shopping-image' width={24} height={24}/>
                </div>
                <div className='border flex w-[56px] h-[45px] justify-center items-center gap-[10px]'>
                <Image src={Menu} alt='shopping-image' width={24} height={24}/>
                </div>
            </div>
        </section>
  )
}
