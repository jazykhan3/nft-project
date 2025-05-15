'use client';
import Image from 'next/image';
import Link from 'next/link';
import rightIcon from '../../../../public/assets/images/right-arrow.png';
import ToprightIcon from '../../../../public/assets/images/top-right-triangle.png';
import growthLogo from '../../../../public/assets/images/growth-icon.png';
import assettradeLogo from '../../../../public/assets/images/asset-trade.png';
import assetmanageLogo from '../../../../public/assets/images/asset-manage.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import './slider.scss';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { usePathname, useRouter } from 'next/navigation';

const MultiCardCarouselInvestersDefiFund = ({ sectionTitle, customclass, path, navigation = false }) => { // Accept navigation prop
    const pathname = usePathname();
    const router = useRouter();

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
                loop={false}
                // pagination={{ clickable: true, el: `.swiper-pagination-${customclass}` }}
                navigation={navigation ? { prevEl: `.swiper-button-prev-${customclass}`, nextEl: `.swiper-button-next-${customclass}` } : false} // Conditionally enable navigation
                modules={[Pagination, Navigation]}
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
                        slidesPerView: 3,
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
                            <h3 className='text-[22px] font-normal text-white mb-2 uppercase'>Diverse Crypto <br />Exposure</h3>
                            <p className={`text-sm font-light mb-2 ${pathname === '/' ? 'text-[#F4F4F2]' : 'text-[#F0F2F5]'}`}>
                                Minimise operational costs while gaining exposure to crypto markets through active rebalancing and DeFi strategies. </p>
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
                            <h3 className='text-[22px] font-normal text-white mb-2 uppercase'>Efficient Portfolio <br />Management</h3>
                            <p className={`text-sm font-light mb-2 ${pathname === '/' ? 'text-[#F4F4F2]' : 'text-[#F0F2F5]'}`}>
                               Leverage the Ethereum blockchain for efficient and transparent portfolio management.</p>
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
                            <h3 className='text-[22px] font-normal text-white mb-2 uppercase'>On-Chain <br/>Transparency</h3>
                            <p className={`text-sm font-light mb-2 ${pathname === '/' ? 'text-[#F4F4F2]' : 'text-[#F0F2F5]'}`}>
                               Benefit from on-chain transparency and auditability via the Enzyme protocol.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                {/* // ))} */}
            </Swiper>
            <div className={`swiper-pagination-${customclass}`}></div> {/* Unique pagination for each carousel */}
        </div>
    );
};

export default MultiCardCarouselInvestersDefiFund;