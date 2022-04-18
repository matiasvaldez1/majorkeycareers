import React from 'react'
import logo from '../public/majorkeylogo.png'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className='bg-primary/95'>
        <Image 
        src={logo}
        />
        
    </div>
  )
}
