'use client';
import Image from 'next/image';
import Link from 'next/link';
import BotomLeftIcon from '../../../../public/assets/images/green-arrow-angle.png';
import { Swiper, SwiperSlide } from 'swiper/react';
// import './slider.scss';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { usePathname, useRouter } from 'next/navigation';

const MultiCardCarouselEpertiseBrands = ({ }) => { // Accept navigation prop
    const router = useRouter();
    const pathname = usePathname();

    return (
        <div className={`multiitems-slider relative border py-3 px-4 border-[#BBBFCA]`}> {/* Add relative to position custom icons */}
            <Swiper
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                // pagination={{ clickable: true, el: `.swiper-pagination-${customclass}` }}
                navigation={false} // Conditionally enable navigation
                modules={[Autoplay]}
                className="swiper_container equal-height-swiper"
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
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
                    <div className="sliding-item relative">
                        <p className={`text-sm font-medium m-0 uppercase flex items-center gap-2 ${pathname === '/' ? 'text-[#F4F4F2]' : 'text-[#D2E5EE]'}`}>
                            <Image
                                height={12}
                                width={12}
                                src={BotomLeftIcon}
                                alt="BotomLeftIcon"
                                className="w-3 h-3 object-contain"
                            />
                            <span>
                                Business Growth
                            </span>
                        </p>
                    </div>
                </SwiperSlide>


                <SwiperSlide className="swiper-slide-item">
                    <div className="sliding-item relative">
                        <p className={`text-sm font-medium m-0 uppercase flex items-center gap-2 ${pathname === '/' ? 'text-[#F4F4F2]' : 'text-[#D2E5EE]'}`}>
                            <Image
                                height={12}
                                width={12}
                                src={BotomLeftIcon}
                                alt="BotomLeftIcon"
                                className="w-3 h-3 object-contain"
                            />
                            <span>
                                Digital Asset Trading
                            </span>
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide-item">
                    <div className="sliding-item relative">
                        <p className={`text-sm font-medium m-0 uppercase flex items-center gap-2 ${pathname === '/' ? 'text-[#F4F4F2]' : 'text-[#D2E5EE]'}`}>
                            <Image
                                height={12}
                                width={12}
                                src={BotomLeftIcon}
                                alt="BotomLeftIcon"
                                className="w-3 h-3 object-contain"
                            />
                            <span>
                                Asset Management
                            </span>
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide-item">
                    <div className="sliding-item relative">
                        <p className={`text-sm font-medium m-0 uppercase flex items-center gap-2 ${pathname === '/' ? 'text-[#F4F4F2]' : 'text-[#D2E5EE]'}`}>
                            <Image
                                height={12}
                                width={12}
                                src={BotomLeftIcon}
                                alt="BotomLeftIcon"
                                className="w-3 h-3 object-contain"
                            />
                            <span>
                                Blockchain Venture & Advisory
                            </span>
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide-item">
                    <div className="sliding-item relative">
                        <p className={`text-sm font-medium m-0 uppercase flex items-center gap-2 ${pathname === '/' ? 'text-[#F4F4F2]' : 'text-[#D2E5EE]'}`}>
                            <Image
                                height={12}
                                width={12}
                                src={BotomLeftIcon}
                                alt="BotomLeftIcon"
                                className="w-3 h-3 object-contain"
                            />
                            <span>
                                Blockchain Venture & Advisory
                            </span>
                        </p>
                    </div>
                </SwiperSlide>
                {/* // ))} */}
            </Swiper>
        </div>
    );
};

export default MultiCardCarouselEpertiseBrands;