'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import barsIcon from '../../../../public/assets/images/bars-Icon.png'
import Logo from '../../../../public/assets/images/logo.png'
import BottomleftAngle from '../../../../public/assets/images/bottom-left-triangle.png'
import {useEffect} from 'react';
import style from './style.module.scss'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const [locationPath, setLocationPath] = useState('');

 useEffect(() => {
    const path = `/${window.location.hash}`;
    setLocationPath(path);
  }, []);    const [isModalOpen, setIsModalOpen] = useState(false);
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

    const handleItemClick = (item) => {
        if (item.name === "Contact Us") {
            setIsModalOpen(true);
        } else {
            // Navigate normally if it's not "Contact Us"
            window.location.href = item.link;
        }
    };

    return (
        <header className={`border-b h-[70px] border-[#BBBFCA]`}>
            <div className="max-w-[1440px] mx-auto lg:px-9 md:px-6 sm:px-4 px-2.5 flex items-center justify-between h-full ">
                {/* Logo */}
                <div className={`h-full flex items-center pe-7 border-e border-[#BBBFCA]`}>
                    <Link href='/'>
                        <Image
                            src={Logo}
                            width={147}
                            height={28}
                            alt='Logo'
                            className='w-[147px] h-7 object-contain '
                        />
                    </Link>

                </div>

                {/* Desktop Nav */}
                <nav className={`h-full items-center border-e hidden lg:flex text-sm uppercase tracking-wide border-[#BBBFCA] ${style.mainMenu}`}>
                    {navItems.map((item, idx) => (
                        <Link
                            // onClick={() => handleItemClick(item)}
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

                {/* Mobile Menu Button */}
                <button
                    className={`lg:hidden border-e h-full pe-2 border-[#BBBFCA]`}
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
                                // onClick={() => handleItemClick(item)}
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
                    </div>
                )
            }
            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 sm:bg-black/80 bg-black flex justify-center items-center z-50">
                    <div className="sm:bg-[#2C2B2B] bg-[black] w-[487px] relative">
                        <h1 className='sm:px-6 px-4 sm:pt-5 pt-3 text-white lg:text-[26px] md:text-[22] text-[20px] font-medium m-0 uppercase' >
                            Contact With US
                        </h1>
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className={`absolute text-12 p-2.5 text-white top-6 right-6 border w-8 h-8 flex items-center justify-center border-[#BBBFCA]`}
                        >
                            ✕
                        </button>
                        <form className="w-full">
                            <div className='flex flex-col gap-4 md:px-14 px-2 md:py-12 py-8'>
                                {/* Name */}
                                <div className="flex flex-col">
                                    <label className='text-white font-normal text-sm flex items-center gap-2 mb-3 uppercase'>
                                        <Image
                                            src={BottomleftAngle}
                                            width={12}
                                            height={12}
                                            alt='BottomLeftTriangle'
                                            className='w-3 h-3 object-contain '
                                        />
                                        <span>Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="border border-[#f4f4f4] hover:border-[#B580FC] focus:border-[#B580FC] px-4 py-3 text-white placeholder-[#a3a3a3] focus:outline-none text-[16px] text-normal"
                                    />
                                </div>

                                {/* Email */}
                                <div className="flex flex-col">
                                    <label className='text-white font-normal text-sm flex items-center gap-2 mb-3 uppercase'>
                                        <Image
                                            src={BottomleftAngle}
                                            width={12}
                                            height={12}
                                            alt='BottomLeftTriangle'
                                            className='w-3 h-3 object-contain '
                                        />
                                        <span>Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Enter your Email"
                                        className="border border-[#f4f4f4] hover:border-[#B580FC] focus:border-[#B580FC] px-4 py-3 text-white placeholder-[#a3a3a3] focus:outline-none text-[16px] text-normal"
                                    />
                                </div>

                                {/* Project */}
                                <div className="flex flex-col">
                                    <label className='text-white font-normal text-sm flex items-center gap-2 mb-3 uppercase'>
                                        <Image
                                            src={BottomleftAngle}
                                            width={12}
                                            height={12}
                                            alt='BottomLeftTriangle'
                                            className='w-3 h-3 object-contain '
                                        />
                                        <span>Project</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your Project link"
                                        className="border border-[#f4f4f4] hover:border-[#B580FC] focus:border-[#B580FC] px-4 py-3 text-white placeholder-[#a3a3a3] focus:outline-none text-[16px] text-normal"
                                    />
                                </div>
                                {/* Twitter */}
                                <div className="flex flex-col">
                                    <label className='text-white font-normal text-sm flex items-center gap-2 mb-3 uppercase'>
                                        <Image
                                            src={BottomleftAngle}
                                            width={12}
                                            height={12}
                                            alt='BottomLeftTriangle'
                                            className='w-3 h-3 object-contain '
                                        />
                                        <span>Twitter</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your Twitter link"
                                        className="border border-[#f4f4f4] hover:border-[#B580FC] focus:border-[#B580FC] px-4 py-3 text-white placeholder-[#a3a3a3] focus:outline-none text-[16px] text-normal"
                                    />
                                </div>

                                {/* Message */}
                                <div className="flex flex-col">
                                    <label className='text-white font-normal text-sm flex items-center gap-2 mb-3 uppercase'>
                                        <Image
                                            src={BottomleftAngle}
                                            width={12}
                                            height={12}
                                            alt='BottomLeftTriangle'
                                            className='w-3 h-3 object-contain '
                                        />
                                        <span>Message</span>
                                    </label>
                                    <textarea
                                        rows="4"
                                        placeholder="Enter your message"
                                        className="border border-[#f4f4f4] hover:border-[#B580FC] focus:border-[#B580FC] px-4 py-3 text-white placeholder-[#a3a3a3] focus:outline-none text-[16px] text-normal resize-none"
                                    ></textarea>
                                </div>

                            </div>
                            {/* Button */}
                            <div className="">
                                <button
                                    type="submit"
                                    className="w-full bg-[#336DFF] hover:bg-[#336DFF]/85 transition-colors duration-300 py-3 uppercase text-sm tracking-wide font-semibold"
                                >
                                    Send ↗
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </header >

    );
}

export default Header;
