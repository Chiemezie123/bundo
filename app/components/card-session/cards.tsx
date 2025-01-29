import { Typography } from '@/components/typography'
import React from 'react'
import BundoLocationIcon from '@/assets/svg2/bundoLocationIcon'
import Location from '@/assets/svg2/location'
import TagIcon from '@/assets/svg2/tagIcon'
import Star from '@/assets/svg2/star'
import { Button } from '@/components/button'
import Image from 'next/image'
import Love from '@/assets/svg2/love'
import { cardProps } from './index.types'

export default function cards(props:cardProps) {
    const {image, brandName,description,location,tags1,tags2,tags3,reviews} = props
  return (
    <div className=' relative w-[124px] h-[302px] pl-[20px] pt-[14px] pr-[9px] pb-[19px] bg-[#FCFBF8] border-b-[0.692px] border-b-[#D6EEDD] rounded-[10px]'>
        {/* first */}
        <div className='relative inset-0 border'>
        <div className='absolute right-0'>
            <Love/>
        </div>
        <div>
            <Image src={image} alt={'image'}  />
        </div>
        </div>
        {/* second */}
        <div className='relative inline-flex flex-col items-start gap-3'>
            <div className='flex flex-col items-start gap-0.5'>
                <div>
                    <Typography>
                    {brandName}
                    </Typography>
                </div>
                <div>
                    <div>
                        <BundoLocationIcon/>
                    </div>
                    <Typography>
                    5 minutes away from you
                    </Typography>
                </div>
                <div>
                    <Typography>
                        {description}
                    </Typography>
                </div>
            </div>
            <div className='flex w-[155px] flex-col items-start gap-2'>
                <div>
                    <div>
                        <Location/>
                    </div>
                    <Typography>
                        {location}
                    </Typography>
                </div>
                <div className='flex w-[111px] h-[12px] items-center gap-[3.46px]'>
                <TagIcon/>
                <Typography>{tags1}</Typography>
                <Typography>{tags2}</Typography>
                <Typography>{tags3}</Typography>
                </div>
                <div className='w-[133.212px] h-[11px]'>
                    <div className='flex w-[48.444px] h-[10.023px] justify-between items-center'>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                    </div>
                    <Typography>{reviews}</Typography>
                </div>
            </div>
        </div>
        {/* third */}
        <div className='relative'>
            <Button children={'View Page'}/>
        </div>
    </div>
  )
}
