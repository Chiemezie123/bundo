import React from 'react'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Map from '../components/map'

export default function Page() {
    
  return (
    <div className='pt-[20px]'>
        <NavBar/>
        <Map/>
        <Footer/>
    </div>
  )
}
