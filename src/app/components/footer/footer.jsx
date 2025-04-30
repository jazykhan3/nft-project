'use client';
import React from 'react'
import Logo from '../../../../public/assets/images/footer-logo.png'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation';
const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className={`border-t ${pathname === '/' ? 'border-[#BBBFCA]' : 'border-[#5D5D5D]'}`}>
      <div className="md:py-4 py-7 max-w-[1440px] mx-auto lg:px-9 md:px-6 sm:px-4 px-2.5 flex md:flex-row flex-col md:gap-0.5 gap-6  items-center justify-between h-full ">
        <Link href='/'>
          <Image
            src={Logo}
            width={123}
            height={25}
            alt='Footer Logo'
            className='w-[123px] h-6 object-contain '
          />
        </Link>

        <div className='flex items-center lg:gap-20 md:gap-16 sm:gap-10 gap-6'>
          <Link
            href=''
            className={`font-normal text-sm ${pathname === '/' ? 'text-[#F4F4F2]' : 'text-white'}`}
          >
            Media kit
          </Link>
          <Link
            href=''
            className={`font-normal text-sm ${pathname === '/' ? 'text-[#F4F4F2]' : 'text-white'}`}
          >
            Terms of Service
          </Link>
        </div>
        <p className={`font-normal text-sm m-0 ${pathname === '/' ? 'text-[#F4F4F2]' : 'text-white'}`}>
          © 2025 All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer