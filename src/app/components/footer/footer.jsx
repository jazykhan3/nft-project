'use client';
import React from 'react'
import Logo from '../../../../public/assets/images/footer-logo.png'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation';
const Footer = () => {
  const pathname = usePathname();
  const loationPath = `/${window.location.hash}`;
  const navItems = [
    { name: 'Expertise', link: '/#expertise' },
    { name: 'Defi Fund', link: '/defifund' },
    { name: 'Web3 Portfolio', link: '/web3-portfolios' },
    { name: 'Partners', link: '/#partners' },
    { name: 'Brands', link: '/#brands' },
    { name: 'Mission', link: '/#mission' },
    { name: 'Join-Us', link: '/join-us' },
    { name: 'Contact Us', link: 'https://tally.so/r/np51G1' },
  ];
  return (
    <footer className={`border-t border-[#BBBFCA]`}>
      <div className="md:py-7 py-7 max-w-[1440px] mx-auto lg:px-9 md:px-6 sm:px-4 px-2.5 grid lg:grid-cols-3 sm:grid-cols-2 grod-cols-1 md:gap-3 gap-6  items-start justify-between h-full ">
        <div className=''>
          <Link href='/'>
            <Image
              src={Logo}
              width={123}
              height={25}
              alt='Footer Logo'
              className='w-[123px] h-6 object-contain lg:mb-0 mb-5'
            />
          </Link>
          <p className='text-[#F0F2F5] font-light text-sm m-0 mt-5 max-w-[360px] relative'>
            We aim to grow our businesses and brands collectively, through a culture of innovation and entrepreneurship. The overall goal is to make a meaningful impact on society through our mission of constant growth and development.
          </p>
        </div>
        <div class="flex justify-start items-start gap-2 flex-wrap">
          <h4 className='text-xl font-semibold m-0 mb-4 text-[#F4F4F2] leading-1 w-full '>Contact</h4>
          <p className="font-normal text-sm m-0 text-[#F4F4F2] uppercase">
            Stay Connected:
          </p>
          <div className='flex gap-2'>
            <Link
              href='https://linkedin.com/company/awehventures'
              className="bg-white text-[#495464] rounded-full p-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 
               0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 
               19h-3v-10h3v10zm-1.5-11.27c-.97 
               0-1.75-.79-1.75-1.76s.78-1.75 
               1.75-1.75 1.76.78 1.76 1.75-.79 
               1.76-1.76 1.76zm13.5 
               11.27h-3v-5.6c0-1.34-.03-3.06-1.87-3.06-1.88 
               0-2.17 1.46-2.17 2.96v5.7h-3v-10h2.89v1.37h.04c.4-.75 
               1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 
               4.59v5.58z"/>
              </svg>
            </Link>
            <Link
              href='https://x.com/awehventures'
              className="bg-white text-[#495464] rounded-full p-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.56c-.89.39-1.84.65-2.84.77 
               1.02-.61 1.8-1.57 2.17-2.72-.95.56-2.01.97-3.13 
               1.19-.9-.96-2.18-1.56-3.6-1.56-2.72 
               0-4.93 2.2-4.93 4.92 0 .39.04.77.13 
               1.13-4.1-.2-7.73-2.17-10.16-5.15-.42.72-.66 
               1.56-.66 2.46 0 1.7.87 3.2 2.2 
               4.08-.8-.02-1.56-.24-2.23-.61v.06c0 
               2.37 1.69 4.35 3.93 4.8-.41.11-.85.16-1.29.16-.32 
               0-.63-.03-.93-.09.63 1.96 2.46 3.38 
               4.63 3.43-1.7 1.33-3.83 2.12-6.15 
               2.12-.4 0-.8-.02-1.19-.07 2.19 
               1.41 4.79 2.23 7.58 2.23 9.1 0 
               14.07-7.54 14.07-14.07 0-.21 
               0-.42-.01-.63.97-.7 1.8-1.56 2.46-2.55z"/>
              </svg>
            </Link>
          </div>
          <p className="w-full font-normal text-sm m-0 text-[#F4F4F2]">
            Email: <a href="mailto:hello@aweh.ventures" target='_blank'>hello@aweh.ventures</a>
          </p>
        </div>
        <div className=''>
          <h4 className='text-xl font-semibold m-0 mb-4 text-[#F4F4F2] leading-1'>Quick Links</h4>
          <nav className={`h-full items-start gap-2 flex flex-col text-sm uppercase tracking-wide`}>
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                className={`text-sm hover:text-[#336DFF] transition-colors duration-200 ${pathname === item.link || loationPath === item.link
                  ? 'text-[#336DFF] font-medium'
                  : 'text-[#F0F2F5] font-normal'
                  }`}
              >
                {item.name}
              </Link>
            ))}

          </nav>
        </div>

      </div>
      <p className="py-5 border-t border-[#BBBFCA] text-center font-normal text-sm m-0 text-[#F4F4F2]">
        © 2025 All rights reserved
      </p>
    </footer>
  )
}

export default Footer