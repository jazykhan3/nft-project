'use client';
import Image from 'next/image';
import Link from 'next/link';
import rightIcon from '../../../../public/assets/images/right-arrow.png';
import ToprightIcon from '../../../../public/assets/images/top-right-triangle.png';
import arabijosLogo from '../../../../public/assets/images/arabijos-logo.png';
import zestpep from '../../../../public/assets/images/zest-pep.png';

import productImage from '../../../../public/assets/images/logo.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import './slider.scss';
import { Navigation, Pagination } from 'swiper/modules';
import { usePathname, useRouter } from 'next/navigation';



const MultiCardCarouselBrands = ({ sectionTitle, customclass, path, navigation = false }) => { // Accept navigation prop
    const router = useRouter();
    const pathname = usePathname();
    const handleClick = () => {
        { router ? router.push(path) : '#' }
    };

    return (
        <div className={`multiitems-slider-brands relative border-s border-e border-[#BBBFCA]`}> {/* Add relative to position custom icons */}
            <div className='flex items-center justify-between lg:px-6 md:px-4 sm:px-3 px-2 lg:pt-12 md:pt-10 pt-9 lg:pb-7 md:pb-5 sm:pb-4 pb-3'>
                <h1 className='text-white lg:text-[40px] md:text-4xl sm:text-3xl text-[26px] font-medium m-0' >
                    {sectionTitle}
                </h1>
                {navigation && ( // Conditionally render navigation buttons
                    <div className="custom-nav-buttons">
                        <div className={`swiper-button-prev-${customclass} w-[60px] h-[60px] border border-[5D5D5D] py-5 px-6`}>
                            <Image width={10} height={20} src={rightIcon} alt="Prev" className='rotate-180 w-[10px] h-[20px] object-contain ' />
                        </div>
                        <div className={`swiper-button-next-${customclass} next w-[60px] h-[60px] border border-[5D5D5D] py-5 px-6`}>
                            <Image width={10} height={20} src={rightIcon} alt="Prev" className=' w-[10px] h-[20px] object-contain ' />
                        </div>
                    </div>
                )}
            </div>
            <Swiper
                loop={true}
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
                    // 1200: {
                    //     slidesPerView: 4,
                    // },
                }}
            >
                {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => ( */}
                <SwiperSlide className="swiper-slide-item">
                    <div className={`sliding-item flex flex-col border border-s-0 border-[#BBBFCA]`}>
                        <div className={`relative px-4 pt-14 pb-8 text-center border-b h-[130px] border-[#BBBFCA]`}>
                            <Image
                                height={12}
                                width={12}
                                src={ToprightIcon}
                                alt="ToprightIcon"
                                className="w-3 h-3 object-contain absolute top-4 right-4"
                            />
                            <Image
                                width={221}
                                height={46}
                                src={productImage}
                                alt="slide"
                                className="max-w-[220px] max-h-[46px] object-cover mx-auto"
                            />
                        </div>

                        <div className="flex-1 flex flex-col justify-between">
                            <div className={`p-6 border-b flex-grow border-[#BBBFCA]`}>
                                <p className="text-sm font-light text-[#F4F4F2] mb-2">
                                    Asset Management, Blockchain Advisory & Venture, established 2022
                                </p>
                                <p className="text-sm text-[#F4F4F2] m-0">Founded by Mohammed Carrim Ganey</p>
                            </div>
                            <Link
                                href='https://www.aweh.ventures/'
                                className='text-sm text-[#FFF] m-0 text-center p-4 uppercase hover:bg-[#336DFF]'
                            >
                                Website
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide-item">
                    <div className={`sliding-item flex flex-col border border-s-0 border-[#BBBFCA]`}>
                        <div className={`relative px-4 pt-14 pb-8 text-center border-b h-[130px] border-[#BBBFCA]`}>
                            <Image
                                height={12}
                                width={12}
                                src={ToprightIcon}
                                alt="ToprightIcon"
                                className="w-3 h-3 object-contain absolute top-4 right-4"
                            />
                            <Image
                                width={170}
                                height={64}
                                src={arabijosLogo}
                                alt="slide"
                                className="max-w-[170px] max-h-[64px] object-cover mx-auto"
                            />
                        </div>

                        <div className="flex-1 flex flex-col justify-between">
                            <div className={`p-6 border-b flex-grow border-[#BBBFCA]`}>
                                <p className="text-sm font-light text-[#F4F4F2] mb-2">
                                    Fine Jewellery & Design established in 1987
                                </p>
                                <p className="text-sm text-[#F4F4F2] m-0">
                                    Founded by Nadiyah,Fauzy & Nazeer Carrim Ganey
                                </p>
                            </div>
                            <Link
                                href='https://www.arabijoux.com/'
                                className='text-sm text-[#FFF] m-0 text-center p-4 uppercase hover:bg-[#336DFF]'
                            >
                                Website
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide-item">
                    <div className={`sliding-item flex flex-col border border-s-0 border-[#BBBFCA]`}>
                        <div className={`relative px-4 pt-14 pb-8 text-center border-b h-[130px] border-[#BBBFCA]`}>
                            <Image
                                height={12}
                                width={12}
                                src={ToprightIcon}
                                alt="ToprightIcon"
                                className="w-3 h-3 object-contain absolute top-4 right-4"
                            />
                            <Image
                                width={145}
                                height={64}
                                src={zestpep}
                                alt="slide"
                                className="max-w-[145px] max-h-[64px] object-cover mx-auto"
                            />
                        </div>

                        <div className="flex-1 flex flex-col justify-between">
                            <div className={`p-6 border-b flex-grow border-[#BBBFCA]`}>
                                <p className="text-sm font-light text-[#F4F4F2] mb-2">
                                    Pet Wellness brand, established in 2021
                                </p>
                                <p className="text-sm text-[#F4F4F2] m-0">
                                    Directed by Mohammed Carrim Ganey
                                </p>
                            </div>
                            <Link
                                href='https://zestandpep.com/'
                                className='text-sm text-[#FFF] m-0 text-center p-4 uppercase hover:bg-[#336DFF]'
                            >
                                Website
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

                {/* <SwiperSlide className="swiper-slide-item">
                    <div className={`sliding-item flex flex-col border border-s-0 border-[#BBBFCA]`}>
                        <div className={`relative px-4 pt-14 pb-8 text-center border-b h-[130px] border-[#BBBFCA]`}>
                            <Image
                                height={12}
                                width={12}
                                src={ToprightIcon}
                                alt="ToprightIcon"
                                className="w-3 h-3 object-contain absolute top-4 right-4"
                            />
                            <Image
                                width={221}
                                height={46}
                                src={productImage}
                                alt="slide"
                                className="max-w-[220px] max-h-[46px] object-cover mx-auto"
                            />
                        </div>

                        <div className="flex-1 flex flex-col justify-between">
                            <div className={`p-6 border-b flex-grow border-[#BBBFCA]`}>
                                <p className="text-sm font-light text-[#F4F4F2] mb-2">
                                    Asset Management, Blockchain Advisory & Venture, established 2022
                                </p>
                                <p className="text-sm text-[#F4F4F2] m-0"> Founded by Mohammed Carrim Ganey</p>
                            </div>
                            <Link
                                href='https://www.aweh.ventures/'
                                className='text-sm text-[#FFF] m-0 text-center p-4 uppercase hover:bg-[#336DFF]'
                            >
                                Website
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide-item">
                    <div className={`sliding-item flex flex-col border border-s-0 hover:cursor-pointer border-[#BBBFCA]`}>
                        <div className={`relative px-4 pt-14 pb-8 text-center border-b h-[130px] border-[#BBBFCA]`}>
                            <Image
                                height={12}
                                width={12}
                                src={ToprightIcon}
                                alt="ToprightIcon"
                                className="w-3 h-3 object-contain absolute top-4 right-4"
                            />

                            <Image
                                width={145}
                                height={64}
                                src={zestpep}
                                alt="slide"
                                className="max-w-[145px] max-h-[64px] object-cover mx-auto"
                            />
                        </div>

                        <div className="flex-1 flex flex-col justify-between">
                            <div className={`p-6 border-b flex-grow border-[#BBBFCA]`}>
                                <p className="text-sm font-light text-[#F4F4F2] mb-2">
                                    The Best Burger in Cape Town

                                </p>
                                <p className="text-sm text-[#F4F4F2] m-0">
                                    Since 2013
                                </p>
                            </div>
                            <Link
                                href='https://zestandpep.com/'
                                className='text-sm text-[#FFF] m-0 text-center p-4 uppercase hover:bg-[#336DFF]'
                            >
                                Website
                            </Link>
                        </div>
                    </div>
                </SwiperSlide> */}

                {/* // ))} */}
            </Swiper>
            <div className={`swiper-pagination-${customclass}`}></div> {/* Unique pagination for each carousel */}
        </div>
    );
};

export default MultiCardCarouselBrands;