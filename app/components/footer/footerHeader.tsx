import React from 'react'
import { Typography } from '@/components/typography'
import Image from 'next/image'
import logo from '@/assets/images/FullLogo.svg'

export default function FooterHeader() {

  return (
    <div className='flex flex-col gap-2 w-full'>
        <div>
            <Image src={logo} alt='logo' width={94} height={27.374} />
        </div>
        <div>
            <Typography variant="p-s" align='left' font="sans" fontWeight="light" color="mine-shaft-950">Simplifying Retail.</Typography>
        </div>
    </div>
  )
}
