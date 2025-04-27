import React from 'react'
import Logo from '../../../../public/assets/images/footer-logo.png'
import Link from 'next/link'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className='border-t border-[#5D5D5D] '>
      <div className="md:py-4 py-7 max-w-[1440px] mx-auto lg:px-9 md:px-6 sm:px-4 px-2.5 flex md:flex-row flex-col md:gap-0.5 gap-6  items-center justify-between h-full ">
        <Image
          src={Logo}
          width={123}
          height={25}
          alt='Footer Logo'
          className='w-[123px] h-6 object-contain '
        />
        <div className='flex items-center lg:gap-20 md:gap-16 sm:gap-10 gap-6'>
          <Link
            href=''
            className='text-white font-normal text-sm'
          >
            Media kit
          </Link>
          <Link
            href=''
            className='text-white font-normal text-sm'
          >
            Terms of Service
          </Link>
        </div>
        <p className='text-white font-normal text-sm m-0'>© 2025 All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer