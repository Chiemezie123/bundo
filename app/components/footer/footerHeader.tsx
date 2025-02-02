import React from 'react'
import { Typography } from '@/components/typography'
import BundoIcon from '@/assets/svg2/bundoIcon'

export default function FooterHeader() {

  return (
    <div className='flex flex-col gap-2 w-full'>
        <div>
            <BundoIcon/>
        </div>
        <div>
            <Typography variant="p-s" align='left' font="sans" fontWeight="light" color="mine-shaft-950">Simplifying Retail.</Typography>
        </div>
    </div>
  )
}
