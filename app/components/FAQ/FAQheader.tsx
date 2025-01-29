import React from 'react'
import { Typography } from '@/components/typography'

export default function FAQheader() {
  return (
    <div className='flex flex-col items-center gap-4'>
        <div className='flex gap-2'>
            <Typography variant="h-xxl" font="sans" fontWeight="bold" color="palm-green-950" className='leading-[75.95px]'>Frequently Asked </Typography>
            <Typography variant='h-xxl' font="sans" fontWeight="bold" color="chateau-green-500" className='leading-[75.95px]'>Questions</Typography>
        </div>
        <div className='w-[469px]'>
          <Typography align="center" variant="p-l" font="sans" fontWeight="light" color="palm-green-950" className='leading-[30.4px]'>Need help? Check out these answers to questions you might have about Bundo. <strong className='font-bold'>Or send an email to help@bundo.app</strong></Typography>
        </div>
    </div>
  )
}
