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

const MultiCardCarouselEpertise = ({ sectionTitle, customclass, path, navigation = false }) => { // Accept navigation prop
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
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                //   }}
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
                            <h3 className='text-[22px] font-normal text-white mb-2 uppercase'>Business Growth</h3>
                            <p className={`text-sm font-light mb-2 ${pathname === '/' ? 'text-[#F4F4F2]' : 'text-[#F0F2F5]'}`}>
                                We apply our expertise, network, and resources to build  brands, but it’s also about mindset. We’re hands-on, helping define and refine business models, scale operations, and navigate challenges. We treat every project like it’s our own, because in a way, it is.
                                <br /><br />
                                Scaling is tricky, but it’s all about structure and timing. We focus on building strong foundations first, which includes solid operations, clear goals, and a scalable model. Once that’s in place, we help ventures seize the right opportunities to grow without overstretching.
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
                            <h3 className='text-[22px] font-normal text-white mb-2 uppercase'>Digital Asset Trading</h3>
                            <p className={`text-sm font-light mb-2 ${pathname === '/' ? 'text-[#F4F4F2]' : 'text-[#F0F2F5]'}`}>
                                Over the last nine years, we’ve seen a variety of market conditions and fine-tuned our strategies to navigate volatility. Through hard-won experience, we know how to analyze market signals and know when to take risks or sit tight. This proactive approach has led to a positive and resilient track record.
                                <br /><br />
                                Over the years, we’ve built trust with key players, including exchanges, market makers, and key industry players. These strong relationships help us shape the markets with foresight and strategic execution or even encourage growth in specific sectors.
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
                            <h3 className='text-[22px] font-normal text-white mb-2 uppercase'>Asset Management</h3>
                            <p className={`text-sm font-light mb-2 ${pathname === '/' ? 'text-[#F4F4F2]' : 'text-[#F0F2F5]'}`}>
                                Markets go up and down, it’s the nature of the game. Instead of resisting, we align our portfolio with the flow, balancing crypto’s high-risk, high-reward potential with steadier assets like fixed income, private equity, and fund-of-funds investments.
                                <br /><br />
                                Numbers are important, but they’re not the whole story. We take a strategy-first approach that assesses risk tolerance, before anchoring traditional investments with our long-term vision and principles.
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
                            <h3 className='text-[22px] font-normal text-white mb-2 uppercase'>Blockchain Venture & Advisory</h3>
                            <p className={`text-sm font-light mb-2 ${pathname === '/' ? 'text-[#F4F4F2]' : 'text-[#F0F2F5]'}`}>
                                With more than 18 years combined experience in digital entrepreneurship, we know the pitfalls of scaling as we’ve faced them ourselves.  Our advice is grounded in experience, not just theory.
                                <br /><br />
                                One of the biggest traps is underestimating how fast things can change in this space—whether it’s tech, market trends, or regulations. Another is scaling too quickly without the right infrastructure. We help ventures pace themselves, stay agile, and focus on sustainable growth instead of chasing short-term wins.
                                <br /><br />
                                We evaluate everything based on the venture’s goals and stage of growth, from ideation to listing.
                            </p>
                        </div>
                    </div>
{/*                     <Link
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
                    </Link> */}
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
                            <h3 className='text-[22px] font-normal text-white mb-2 uppercase'>Asset Management</h3>
                            <p className={`text-sm font-light mb-2 ${pathname === '/' ? 'text-[#F4F4F2]' : 'text-[#F0F2F5]'}`}>
                                Markets go up and down, it’s the nature of the game. Instead of resisting, we align our portfolio with the flow, balancing crypto’s high-risk, high-reward potential with steadier assets like fixed income, private equity, and fund-of-funds investments.
                                <br /><br />
                                Numbers are important, but they’re not the whole story. We take a strategy-first approach that assesses risk tolerance, before anchoring traditional investments with our long-term vision and principles.
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
                            <h3 className='text-[22px] font-normal text-white mb-2 uppercase'>Digital Asset Trading</h3>
                            <p className={`text-sm font-light mb-2 ${pathname === '/' ? 'text-[#F4F4F2]' : 'text-[#F0F2F5]'}`}>
                                Over the last nine years, we’ve seen a variety of market conditions and fine-tuned our strategies to navigate volatility. Through hard-won experience, we know how to analyze market signals and know when to take risks or sit tight. This proactive approach has led to a positive and resilient track record.
                                <br /><br />
                                Over the years, we’ve built trust with key players, including exchanges, market makers, and key industry players. These strong relationships help us shape the markets with foresight and strategic execution or even encourage growth in specific sectors.
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

export default MultiCardCarouselEpertise;
