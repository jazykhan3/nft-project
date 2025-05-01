'use client';
import Image from 'next/image';
import Link from 'next/link';
import rightIcon from '../../../../public/assets/images/right-arrow.png';
import ToprightIcon from '../../../../public/assets/images/top-right-triangle.png';
import growthLogo from '../../../../public/assets/images/growth-icon.png';
import assettradeLogo from '../../../../public/assets/images/asset-trade.png';
import assetmanageLogo from '../../../../public/assets/images/asset-manage.png';
import blockchainLogo from '../../../../public/assets/images/blockchain-icon.png';
import ForwardArrow from '../../../../public/assets/images/forward-arrow.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import './slider.scss';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { usePathname, useRouter } from 'next/navigation';

const MultiCardCarouselEpertiseDefiFund = ({ sectionTitle, customclass, path, navigation = false }) => { // Accept navigation prop
    const pathname = usePathname();
    const router = useRouter();
    const handleClick = () => {
        { router ? router.push(path) : '#' }
    };

    return (
        <div className={`multiitems-slider-expertise relative border-s border-e border-[#BBBFCA]`}> {/* Add relative to position custom icons */}
            <div className='flex items-center justify-between lg:px-6 md:px-4 sm:px-3 px-2 lg:pt-12 md:pt-10 pt-9 lg:pb-7 md:pb-5 sm:pb-4 pb-3'>
                <h1 className='text-white lg:text-[40px] md:text-4xl sm:text-3xl text-[26px] font-medium m-0' >
                    {sectionTitle}
                </h1>
                {navigation && ( // Conditionally render navigation buttons
                    <div className="custom-nav-buttons">
                        <div className={`swiper-button-prev-${customclass} w-[60px] h-[60px] border py-5 px-6 border-[#BBBFCA]`}>
                            <Image width={10} height={20} src={rightIcon} alt="Prev" className='rotate-180 w-[10px] h-[20px] object-contain ' />
                        </div>
                        <div className={`swiper-button-next-${customclass} next w-[60px] h-[60px] border py-5 px-6 border-[#BBBFCA]`}>
                            <Image width={10} height={20} src={rightIcon} alt="Prev" className=' w-[10px] h-[20px] object-contain ' />
                        </div>
                    </div>
                )}
            </div>
            <Swiper
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                // pagination={{ clickable: true, el: `.swiper-pagination-${customclass}` }}
                navigation={navigation ? { prevEl: `.swiper-button-prev-${customclass}`, nextEl: `.swiper-button-next-${customclass}` } : false} // Conditionally enable navigation
                modules={[Pagination, Navigation, Autoplay]}
                className="swiper_container equal-height-swiper"
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 4,
                    },
                }}
            >
                {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => ( */}
                <SwiperSlide className="swiper-slide-item">
                    <div className={`sliding-item relative flex flex-col border border-s-0 py-6 px-7 border-[#BBBFCA]`}>
                        <div className="pt-14 pb-8 ">
                            <Image
                                height={12}
                                width={12}
                                src={ToprightIcon}
                                alt="ToprightIcon"
                                className="w-3 h-3 object-contain absolute top-6 right-6"
                            />
                            <Image
                                width={90}
                                height={60}
                                src={growthLogo}
                                alt="Growth"
                                className="max-w-[90px] max-h-[60px] object-contain"
                            />
                        </div>
                        <div className="">
                            <h3 className='text-[22px] font-normal text-white mb-2 uppercase'>Mergers & <br />Acquisitions</h3>
                            <p className={`text-sm font-light mb-2 ${pathname === '/' ? 'text-[#F4F4F2]' : 'text-[#F0F2F5]'}`}>
                                We buy businesses and scale them.    </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide-item">
                    <div className={`sliding-item relative flex flex-col border border-s-0 py-6 px-7 border-[#BBBFCA]`}>
                        <div className="pt-14 pb-8 ">
                            <Image
                                height={12}
                                width={12}
                                src={ToprightIcon}
                                alt="ToprightIcon"
                                className="w-3 h-3 object-contain absolute top-6 right-6"
                            />
                            <Image
                                width={60}
                                height={60}
                                src={assettradeLogo}
                                alt="Digital Asset Trading"
                                className="max-w-[60px] max-h-[60px] object-contain"
                            />
                        </div>
                        <div className="">
                            <h3 className='text-[22px] font-normal text-white mb-2 uppercase'>Digital Asset Trading</h3>
                            <p className={`text-sm font-light mb-2 ${pathname === '/' ? 'text-[#F4F4F2]' : 'text-[#F0F2F5]'}`}>
                                We trade digital assets. </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide-item">
                    <div className={`sliding-item relative flex flex-col border border-s-0 py-6 px-7 border-[#BBBFCA]`}>
                        <div className="pt-14 pb-8 ">
                            <Image
                                height={12}
                                width={12}
                                src={ToprightIcon}
                                alt="ToprightIcon"
                                className="w-3 h-3 object-contain absolute top-6 right-6"
                            />
                            <Image
                                width={90}
                                height={60}
                                src={assetmanageLogo}
                                alt="Asset Management"
                                className="max-w-[90px] max-h-[60px] object-contain"
                            />
                        </div>
                        <div className="">
                            <h3 className='text-[22px] font-normal text-white mb-2 uppercase'>MULTI-ASSET Management</h3>
                            <p className={`text-sm font-light mb-2 ${pathname === '/' ? 'text-[#F4F4F2]' : 'text-[#F0F2F5]'}`}>
                                Aweh Ventures maintains a diverse portfolio of cryptocurrency, stocks, private equity and fund-of fund investments. Suitable for all market climates.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide-item">
                    <div className={`sliding-item relative flex flex-col border border-s-0 py-6 px-7 border-[#BBBFCA]`}>
                        <div className="pt-14 pb-8 ">
                            <Image
                                height={12}
                                width={12}
                                src={ToprightIcon}
                                alt="ToprightIcon"
                                className="w-3 h-3 object-contain absolute top-6 right-6"
                            />
                            <Image
                                width={60}
                                height={60}
                                src={blockchainLogo}
                                alt="Blockchain Venture & Advisory"
                                className="max-w-[60px] max-h-[60px] object-contain"
                            />
                        </div>
                        <div className="">
                            <h3 className='text-[22px] font-normal text-white mb-2 uppercase'>BLOCKCHAIN VENTURE & ADVISORY</h3>
                            <p className={`text-sm font-light mb-2 ${pathname === '/' ? 'text-[#F4F4F2]' : 'text-[#F0F2F5]'}`}>
                                With more than 10 years of founder experience in the blockchain sector and two succesful exits.
                                <br /><br />
                                Aweh Ventures advises and invests with the best projects in blockchain and passionate entrepeneurs.
                            </p>
                        </div>
                    </div>
                    <Link
                        href='/web3-portfolios'
                        className='uppercase h-fit md:max-w-[340px] min-w-[25%] text-white font-medium text-[13px] flex gap-2.5 p-4 w-full bg-[#336DFF] justify-center items-center hover:bg-[#336DFF]/80'
                    >
                        See our Venture Web3 Portfolio
                        <Image
                            src={ForwardArrow}
                            width={12}
                            height={12}
                            alt='Icon'
                            className='w-3 h-3 object-contain '
                        />
                    </Link>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide-item">
                    <div className={`sliding-item relative flex flex-col border border-s-0 py-6 px-7 border-[#BBBFCA]`}>
                        <div className="pt-14 pb-8 ">
                            <Image
                                height={12}
                                width={12}
                                src={ToprightIcon}
                                alt="ToprightIcon"
                                className="w-3 h-3 object-contain absolute top-6 right-6"
                            />
                            <Image
                                width={90}
                                height={60}
                                src={growthLogo}
                                alt="Growth"
                                className="max-w-[90px] max-h-[60px] object-contain"
                            />
                        </div>
                        <div className="">
                            <h3 className='text-[22px] font-normal text-white mb-2 uppercase'>INCUBATION</h3>
                            <p className={`text-sm font-light mb-2 ${pathname === '/' ? 'text-[#F4F4F2]' : 'text-[#F0F2F5]'}`}>
                                We build high value, high-impact businesses in-house, from concept to execution.We build high value, high-impact businesses in-house, from concept to execution.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide-item">
                    <div className={`sliding-item relative flex flex-col border border-s-0 py-6 px-7 border-[#BBBFCA]`}>
                        <div className="pt-14 pb-8 ">
                            <Image
                                height={12}
                                width={12}
                                src={ToprightIcon}
                                alt="ToprightIcon"
                                className="w-3 h-3 object-contain absolute top-6 right-6"
                            />
                            <Image
                                width={60}
                                height={60}
                                src={assettradeLogo}
                                alt="Digital Asset Trading"
                                className="max-w-[60px] max-h-[60px] object-contain"
                            />
                        </div>
                        <div className="">
                            <h3 className='text-[22px] font-normal text-white mb-2 uppercase'>MARKET MAKING & DEVELOPMENT</h3>
                            <p className={`text-sm font-light mb-2 ${pathname === '/' ? 'text-[#F4F4F2]' : 'text-[#F0F2F5]'}`}>
                                We connect projects with experienced market makers and developers to accelerate their growth.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide-item">
                    <div className={`sliding-item relative flex flex-col border border-s-0 py-6 px-7 border-[#BBBFCA]`}>
                        <div className="pt-14 pb-8 ">
                            <Image
                                height={12}
                                width={12}
                                src={ToprightIcon}
                                alt="ToprightIcon"
                                className="w-3 h-3 object-contain absolute top-6 right-6"
                            />
                            <Image
                                width={90}
                                height={60}
                                src={assetmanageLogo}
                                alt="Asset Management"
                                className="max-w-[90px] max-h-[60px] object-contain"
                            />
                        </div>
                        <div className="">
                            <h3 className='text-[22px] font-normal text-white mb-2 uppercase'>OTC DESK</h3>
                            <p className={`text-sm font-light mb-2 ${pathname === '/' ? 'text-[#F4F4F2]' : 'text-[#F0F2F5]'}`}>
                                We have a vast partner network that enables us to support OTC trading across Crypto-to-Crypto, Fiat-to-Crypto, and Crypto-to-Fiat transactions.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide-item">
                    <div className={`sliding-item relative flex flex-col border border-s-0 py-6 px-7 border-[#BBBFCA]`}>
                        <div className="pt-14 pb-8 ">
                            <Image
                                height={12}
                                width={12}
                                src={ToprightIcon}
                                alt="ToprightIcon"
                                className="w-3 h-3 object-contain absolute top-6 right-6"
                            />
                            <Image
                                width={60}
                                height={60}
                                src={blockchainLogo}
                                alt="Blockchain Venture & Advisory"
                                className="max-w-[60px] max-h-[60px] object-contain"
                            />
                        </div>
                        <div className="">
                            <h3 className='text-[22px] font-normal text-white mb-2 uppercase'>RESEARCH & INSIGHTS (COMING SOON)</h3>
                            <p className={`text-sm font-light mb-2 ${pathname === '/' ? 'text-[#F4F4F2]' : 'text-[#F0F2F5]'}`}>
                                Stay up to date with the latest Research & Insights from our team. Explore our industry-leading analysis on digital assets, blockchain technology, our business, and more.
                            </p>
                        </div>
                    </div>
                    <Link
                        href='/web3-portfolios'
                        className='uppercase h-fit md:max-w-[340px] min-w-[25%] text-white font-medium text-[13px] flex gap-2.5 p-4 w-full bg-[#336DFF] justify-center items-center hover:bg-[#336DFF]/80'
                    >
                        See our Venture Web3 Portfolio
                        <Image
                            src={ForwardArrow}
                            width={12}
                            height={12}
                            alt='Icon'
                            className='w-3 h-3 object-contain '
                        />
                    </Link>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide-item">
                    <div className={`sliding-item relative flex flex-col border border-s-0 py-6 px-7 border-[#BBBFCA]`}>
                        <div className="pt-14 pb-8 ">
                            <Image
                                height={12}
                                width={12}
                                src={ToprightIcon}
                                alt="ToprightIcon"
                                className="w-3 h-3 object-contain absolute top-6 right-6"
                            />
                            <Image
                                width={90}
                                height={60}
                                src={growthLogo}
                                alt="Growth"
                                className="max-w-[90px] max-h-[60px] object-contain"
                            />
                        </div>
                        <div className="">
                            <h3 className='text-[22px] font-normal text-white mb-2 uppercase'>CORPORATE STRUCTURE</h3>
                            <p className={`text-sm font-light mb-2 ${pathname === '/' ? 'text-[#F4F4F2]' : 'text-[#F0F2F5]'}`}>
                                Aweh Ventures can support in keeping your company compliant and tax efficient.
                                <br /><br />
                                We've set up multiple structures for our businesses and can advise and connect you with the right people.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide-item">
                    <div className={`sliding-item relative flex flex-col border border-s-0 py-6 px-7 border-[#BBBFCA]`}>
                        <div className="pt-14 pb-8 ">
                            <Image
                                height={12}
                                width={12}
                                src={ToprightIcon}
                                alt="ToprightIcon"
                                className="w-3 h-3 object-contain absolute top-6 right-6"
                            />
                            <Image
                                width={60}
                                height={60}
                                src={assettradeLogo}
                                alt="Digital Asset Trading"
                                className="max-w-[60px] max-h-[60px] object-contain"
                            />
                        </div>
                        <div className="">
                            <h3 className='text-[22px] font-normal text-white mb-2 uppercase'>PHILANTHROPHY</h3>
                            <p className={`text-sm font-light mb-2 ${pathname === '/' ? 'text-[#F4F4F2]' : 'text-[#F0F2F5]'}`}>
                                Money is a tool that can help society. We aim to make a positive impact in the world, supporting causes that align with our values. Philanthropy is more than an afterthought – it’s baked into who we are and how we operate.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide-item">
                    <div className={`sliding-item relative flex flex-col border border-s-0 py-6 px-7 border-[#BBBFCA]`}>
                        <div className="pt-14 pb-8 ">
                            <Image
                                height={12}
                                width={12}
                                src={ToprightIcon}
                                alt="ToprightIcon"
                                className="w-3 h-3 object-contain absolute top-6 right-6"
                            />
                            <Image
                                width={90}
                                height={60}
                                src={assetmanageLogo}
                                alt="Asset Management"
                                className="max-w-[90px] max-h-[60px] object-contain"
                            />
                        </div>
                        <div className="">
                            <h3 className='text-[22px] font-normal text-white mb-2 uppercase'>EDUCATION & DEVELOPMENT</h3>
                            <p className={`text-sm font-light mb-2 ${pathname === '/' ? 'text-[#F4F4F2]' : 'text-[#F0F2F5]'}`}>
                                Growth is important – both personal and professional. We encourage each team member and businesses to continuously learn and master new skills.                             </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide-item">
                    <div className={`sliding-item relative flex flex-col border border-s-0 py-6 px-7 border-[#BBBFCA]`}>
                        <div className="pt-14 pb-8 ">
                            <Image
                                height={12}
                                width={12}
                                src={ToprightIcon}
                                alt="ToprightIcon"
                                className="w-3 h-3 object-contain absolute top-6 right-6"
                            />
                            <Image
                                width={60}
                                height={60}
                                src={blockchainLogo}
                                alt="Blockchain Venture & Advisory"
                                className="max-w-[60px] max-h-[60px] object-contain"
                            />
                        </div>
                        <div className="">
                            <h3 className='text-[22px] font-normal text-white mb-2 uppercase'>OPERATIONAL SYSTEMS</h3>
                            <p className={`text-sm font-light mb-2 ${pathname === '/' ? 'text-[#F4F4F2]' : 'text-[#F0F2F5]'}`}>
                                Internal politics and conflict can crush even the best ideas. We’ve built clarity and accountability into our system, so that it runs smoothly with no bottlenecks. Our business thrives when everyone takes an active role, not just the leaders.                            </p>
                        </div>
                    </div>
                    <Link
                        href='/web3-portfolios'
                        className='uppercase h-fit md:max-w-[340px] min-w-[25%] text-white font-medium text-[13px] flex gap-2.5 p-4 w-full bg-[#336DFF] justify-center items-center hover:bg-[#336DFF]/80'
                    >
                        See our Venture Web3 Portfolio
                        <Image
                            src={ForwardArrow}
                            width={12}
                            height={12}
                            alt='Icon'
                            className='w-3 h-3 object-contain '
                        />
                    </Link>
                </SwiperSlide>
                {/* // ))} */}
            </Swiper>
            <div className={`swiper-pagination-${customclass}`}></div> {/* Unique pagination for each carousel */}
        </div>
    );
};

export default MultiCardCarouselEpertiseDefiFund;