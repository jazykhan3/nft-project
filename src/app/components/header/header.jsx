'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import barsIcon from '../../../../public/assets/images/bars-Icon.png'
import Logo from '../../../../public/assets/images/logo.png'

import style from './style.module.scss'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { name: 'Expertise', link: '/' },
        { name: 'Defi Fund', link: '#' },
        { name: 'Web3 Portfolio', link: '#' },
        { name: 'Partners', link: '#' },
        { name: 'Brands', link: '#' },
        { name: 'Mission', link: '#' },
        { name: 'Join-Us', link: '#' },
        { name: 'Contact Us', link: '#' },
    ];

    return (
        <header className="border-b border-[#5D5D5D] h-[70px]">
            <div className="max-w-[1440px] mx-auto lg:px-9 md:px-6 sm:px-4 px-2.5 flex items-center justify-between h-full ">
                {/* Logo */}
                <div className="h-full flex items-center pe-7 border-e border-[#5D5D5D] ">
                <Image
                        src={Logo}
                        width={147}
                        height={28}
                        alt='Icon'
                        className='w-[147px] h-7 object-contain '
                    />
                </div>

                {/* Desktop Nav */}
                <nav className={`h-full items-center border-e border-[#5D5D5D] hidden lg:flex text-sm uppercase tracking-wide ${style.mainMenu}`}>
                    {navItems.map((item, idx) => (
                        <Link
                            key={idx}
                            href={item.link}
                            className={` text-sm hover:text-[#336DFF] transition-colors duration-200 ${pathname === item.link ? 'text-[#336DFF] font-medium' : 'text-[#F0F2F5] font-normal'}`}
                        >
                            {item.name}
                        </Link>
                    ))}

                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden border-e border-[#5D5D5D] h-full pe-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    <Image
                        src={barsIcon}
                        width={28}
                        height={28}
                        alt='Icon'
                        className='w-7 h-7 object-contain '
                    />
                </button>
            </div>

            {/* Mobile Nav */}
            {
                isOpen && (
                    <div className={` absolute z-30 lg:hidden w-full overflow-hidden transition-max-height duration-300 ease-in-out ${style.mainMenuMobile}`}>

                        {navItems.map((item, idx) => (
                            <Link
                                key={idx}
                                href={item.link}
                                className={` text-sm hover:text-[#336DFF] transition-colors duration-200 ${pathname === item.link ? 'text-[#336DFF] font-medium' : 'text-[#F0F2F5] font-normal'}`}
                            >
                                {item.name}
                            </Link>
                        ))}

                    </div>
                )
            }
        </header >
    );
}

export default Header;