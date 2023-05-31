import Image from 'next/image';
import React from 'react'
import headerLogo from '../../public/images/profile/upc header logo-01.png'




const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
      <Image src={headerLogo} alt='logo' />
    </div>
  )
}

export default Logo