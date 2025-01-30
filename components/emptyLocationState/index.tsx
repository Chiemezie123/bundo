import React from 'react'
import GreenLocationIcon from '@/assets/svg2/greenLocationIcon'
import { Typography } from '../typography'

export default function EmptyState() {
  return (
    <div className='flex w-[380px] px-[25px] items-center flex-col gap-[22px]'>
        <div className='w-[71.075px] h-[71.075px] bg-[#FAF8F3] rounded-[50px] flex justify-center items-center'>
            <GreenLocationIcon/>
        </div>
        <div>
            <Typography align='center' variant='p-m' color="mine-shaft-950" fontWeight="regular" font="sans" className='leading-[22.943px]'>
            No Business to display for now. 
            Don’t forget to check back soon
            </Typography>
        </div>
    </div>
  )
}
