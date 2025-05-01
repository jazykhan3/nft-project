import Footer from '@/app/components/footer/footer'
import Header from '@/app/components/header/header'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ForwardArrow from '../../../public/assets/images/forward-arrow.png'
import ToprightIcon from '../../../public/assets/images/top-right-triangle.png';
import TopLeftTriangle from '../../../public/assets/images/top-left-triangle.png'
import BottomleftAngle from '../../../public/assets/images/bottom-left-triangle.png'
import BottomRightTriangle from '../../../public/assets/images/bottom-right-triangle.png'
import PersonShareImage from '../../../public/assets/images/share-icon.png'
import MapIconChoose from '../../../public/assets/images/because-are.png'
import CarbonLogo from '../../../public/assets/images/carbonLogo.png'
import WaterReliefLogo from '../../../public/assets/images/waterreliefLogo.png'
import PellarLogo from '../../../public/assets/images/pellarLogo.png'
import NextGenLogo from '../../../public/assets/images/nextgen-Logo.png'
import handGroup from '../../../public/assets/images/handGroup.png';
import financeImage from '../../../public/assets/images/finance-image.png';
import technoligicalImage from '../../../public/assets/images/technoligical-image.png';
import socialImage from '../../../public/assets/images/social-image.png';
import bgMaskImage from '../../../public/assets/images/raw-Mask.png'
import MultiCardCarouselEpertise from '@/app/components/expertiseSlider/expertiseSlider'
import MultiCardCarouselBrands from '@/app/components/brandSlider/brandSlider'
import MultiCardCarouselEpertiseBrands from '@/app/components/expertiseSlider/brandsexpertiseSlider'
import FLIGHTFUNDLOGOWHITE from '../../../public/assets/images/FLIGHTFUNDLOGOWHITE.png'
import HarLogo from '../../../public/assets/images/har.png'
import MultiCardCarouselEpertiseDefiFund from '../components/expertiseSlider/expertiseSliderDefiFund'

const FrontPageV2 = () => {
  return (
    <div className='bg-[#495464]'>
      <Header />
      {/* Top Banner Section */}
      <div className='max-w-[1440px] mx-auto lg:px-9 md:px-6 sm:px-4 px-2.5'>
        <div className='border-b border-s border-e border-[#BBBFCA]'>
          <div className=' flex md:flex-row flex-col-reverse gap-0'>
            <div className='md:w-[calc(55%+6px)] w-full flex flex-col justify-between'>
              <div className='lg:px-7 md:px-4 px-2  lg:pt-24 md:pt-18 sm:pt-14 pt-8 lg:pb-12 md:pb-9 pb-7'>
                <h1 className='text-[white] lg:text-[40px] md:text-4xl sm:text-3xl text-[26px] font-medium m-0' >
                  A Private Family Office Nurturing Innovation and Entrepreneurship
                </h1>
                <div className='relative lg:px-10 md:px-8 sm:px-6 px-4 py-4'>
                  <p className='text-[white] font-light text-sm m-0 max-w-[630px]  mx-auto relative'>
                    We invest in bold ideas and back innovative founders and support their growth, through a culture of innovation and entrepreneurship.
                    <br /><br />
                    If you’ve got something you think we might like. Contact us below.                  </p>
                  <Image
                    src={ToprightIcon}
                    width={12}
                    height={12}
                    alt='ToprightIcon'
                    className='w-3 h-3 object-contain absolute top-2 right-0'
                  />
                  <Image
                    src={BottomleftAngle}
                    width={12}
                    height={12}
                    alt='BottomleftAngle'
                    className='w-3 h-3 object-contain absolute bottom-2 left-0'
                  />
                </div>
              </div>
              <div className="grid lg:grid-cols-5 grid-cols-1">
                <div className=' md:col-span-3 md:block hidden'></div>
                <div className=' md:col-span-2 col-span-full'>
                  <Link
                    href='/web3-portfolios'
                    className='uppercase h-fit text-white font-medium text-sm flex gap-2.5 p-4 w-full bg-[#336DFF] justify-end items-center hover:bg-[#336DFF]/80'
                  >
                    Explore Our Portfolio
                    <Image
                      src={ForwardArrow}
                      width={12}
                      height={12}
                      alt='Icon'
                      className='w-3 h-3 object-contain '
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className='md:w-[calc(45%-6px)] w-full md:border-s border-s-0 md:border-b-0 border-b  border-[#BBBFCA]'>
              <Image
                src={bgMaskImage}
                // width={620}
                // height={466}
                alt='BG Mask Image'
                className=' w-full md:h-full object-cover '
              />
            </div>
          </div>
        </div>
      </div>
      {/* Vision to Success  */}
      <div className='max-w-[1440px] mx-auto lg:px-9 md:px-6 sm:px-4 px-2.5'>
        <div className='border-b border-s border-e border-[#BBBFCA]'>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-0'>
            <div className='relative lg:border-e border-e-0 lg:border-b-0 border-b  border-[#BBBFCA] flex flex-col justify-between lg:col-span-1 col-span-full'>
              <span className='p-7 block'>
                <h3 className='sm:max-w-[250px] text-white font-normal md:text-[22px] text-[20px] m-0 leading-7 mt-4' >
                  From Vision <br />to Market Success
                </h3>
              </span>
              <Link
                href='/web3-portfolios'
                className='uppercase h-fit text-white font-medium text-sm lg:flex hidden gap-2.5 p-4 w-full bg-[#336DFF] justify-end items-center hover:bg-[#336DFF]/80'
              >
                Explore Our Portfolio
                <Image
                  src={ForwardArrow}
                  width={12}
                  height={12}
                  alt='Icon'
                  className='w-3 h-3 object-contain '
                />
              </Link>
            </div>
            <div className='col-span-2 grid md:grid-cols-3 grid-cols-1'>
              <div className='relative md:border-e border-e-0 border-[#BBBFCA] flex flex-col justify-between'>
                <span className='py-7 px-4 flex-grow flex items-end sm:pt-7 pt-10 md:pb-7 pb-0 md:justify-start justify-center'>
                  <h3 className='text-white font-bold text-[36px] m-0 leading-7 md:text-left text-center' >
                    $1.585B
                  </h3>
                </span>
                <p
                  className='md:text-left text-center uppercase min-h-[52px] md:border-t border-t-0 md:border-b-0 border-b border-[#BBBFCA] h-fit text-white font-medium text-xs px-4 py-2 flex w-full md:justify-start justify-center items-center '
                >
                  TOTAL COMBINED MARKET CAP
                </p>
              </div>
              <div className='col-span-2'>
                <div className='relative flex lg:flex-row flex-col justify-between'>
                  <div className='flex-grow h-full'>
                    <div className='px-4 py-4 pt-7 lg:pe-0 flex-grow flex lg:flex-wrap flex-nowrap lg:justify-start justify-between gap-y-7 gap-x-0 items-end'>
                      <div className='flex gap-2 flex-col lg:w-full w-auto'>
                        <p className='text-[#F4F4F2] uppercase font-light text-[12px] flex items-center gap-2 m-0'>
                          <Image
                            src={BottomleftAngle}
                            width={10}
                            height={10}
                            alt='BottomLeftTriangle'
                            className='w-[10px] h-[10px] object-contain '
                          />
                          <span>Curate</span>
                        </p>
                        <h3 className='text-white font-bold sm:text-[36px] text-[30px] m-0 leading-7' >
                          2000x
                        </h3>
                      </div>
                      <div className='flex gap-2 flex-col lg:w-[45%] w-auto'>
                        <p className='text-[#F4F4F2] font-light text-[12px] flex items-center gap-2 m-0 uppercase'>
                          <Image
                            src={BottomleftAngle}
                            width={10}
                            height={10}
                            alt='BottomLeftTriangle'
                            className='w-[10px] h-[10px] object-contain '
                          />
                          <span>Carbon</span>
                        </p>
                        <h3 className='text-white font-bold sm:text-[36px] text-[30px] m-0 leading-7' >
                          168x
                        </h3>
                      </div>
                      <div className='flex gap-2 flex-col lg:w-[45%] w-auto'>
                        <p className='text-[#F4F4F2] font-light text-[12px] flex items-center gap-2 m-0 uppercase'>
                          <Image
                            src={BottomleftAngle}
                            width={10}
                            height={10}
                            alt='BottomLeftTriangle'
                            className='w-[10px] h-[10px] object-contain '
                          />
                          <span>Dexcheck AI</span>
                        </p>
                        <h3 className='text-white font-bold sm:text-[36px] text-[30px] m-0 leading-7' >
                          22.5x
                        </h3>
                      </div>
                    </div>
                    <p
                      className='lg:text-left text-center uppercase min-h-[52px] lg:border-t border-t-0 lg:border-b-0 border-b border-[#BBBFCA] h-fit text-white font-medium text-xs px-4 py-2 flex w-full lg:justify-start justify-center items-center'
                    >
                      Notable project
                    </p>
                  </div>
                  <div className='flex flex-col justify-end'>

                    <h3 className='text-white font-bold sm:text-[36px] text-[30px] m-0 leading-7 py-4 px-3 lg:text-left text-center' >
                      54%+
                    </h3>
                    <p
                      className='lg:text-left text-center uppercase min-h-[52px] lg:border-t border-t-0 lg:border-b-0 border-b border-[#BBBFCA] h-fit text-white font-medium text-xs px-4 py-2 flex w-full lg:justify-start justify-center items-center '
                    >
                      PROJECTS LAUNCHED SUCCESSFULLY
                    </p>
                  </div>

                </div>

              </div>
            </div>
            <Link
              href='/web3-portfolios'
              className='col-span-full uppercase h-fit text-white font-medium text-sm lg:hidden flex gap-2.5 p-4 w-full bg-[#336DFF] justify-end items-center hover:bg-[#336DFF]/80'
            >
              Explore Our Portfolio
              <Image
                src={ForwardArrow}
                width={12}
                height={12}
                alt='Icon'
                className='w-3 h-3 object-contain '
              />
            </Link>
          </div>
        </div>
      </div>

      {/* WHo we are  */}
      <div className='max-w-[1440px] mx-auto lg:px-9 md:px-6 sm:px-4 px-2.5'>
        <div className='border-b border-s border-e border-[#BBBFCA]'>
          <div className='grid md:grid-cols-3 grid-cols-1 gap-0'>
            <div className='relative p-10 md:border-e border-e-0 border-[#BBBFCA] flex items-center justify-center'>
              {/* Top left  */}
              <Image
                src={TopLeftTriangle}
                width={12}
                height={12}
                alt='ToprightIcon'
                className='w-3 h-3 object-contain absolute top-7 left-7'
              />
              {/* Top Right  */}
              <Image
                src={ToprightIcon}
                width={12}
                height={12}
                alt='BottomLeftTriangle'
                className='w-3 h-3 object-contain absolute top-7 right-7'
              />
              {/* main image  */}
              <Image
                height={276}
                width={332}
                src={PersonShareImage}
                alt="PersonShare"
                className="object-contain w-full max-w-[276px] max-h-[332px]"
              />
              {/* Bottom left  */}
              <Image
                src={BottomleftAngle}
                width={12}
                height={12}
                alt='ToprightIcon'
                className='w-3 h-3 object-contain absolute bottom-7 left-7'
              />
              {/* Bottom Right  */}
              <Image
                src={BottomRightTriangle}
                width={12}
                height={12}
                alt='BottomLeftTriangle'
                className='w-3 h-3 object-contain absolute bottom-7 right-7'
              />
            </div>
            <div className='col-span-2 flex flex-col gap-10 lg:px-8 md:px-6 sm:px-4 px-2 lg:py-16 md:py-12 sm:py-9 py-7 justify-center'>
              <h1 className='max-w-[613px] text-white lg:text-[40px] md:text-4xl sm:text-3xl text-[26px] font-medium m-0' >
                Who we are
              </h1>
              <p className='text-[#F4F4F2] font-light text-sm m-0 max-w-[810px]'>
                Aweh Ventures is founder-led with deep expertise in Web3. We have built,scaled and exited a variety of businesses, from a 5000+ cryptocurrency mining operation to the 3rd largest NFT Marketplace.Since then, we created Aweh Ventures to share this expertise and support with other founders to accelerate their growth and now are invested in 20+ companies across blockchain,Tech and other passion project industries.
                <br /><br />
                Aweh Ventures is founder-led with deep expertise in Web3. We have built,scaled and exited a variety of businesses, from a 5000+ cryptocurrency mining operation to the 3rd largest NFT Marketplace.Since then, we created Aweh Ventures to share this expertise and support with other founders to accelerate their growth and now are invested in 20+ companies across blockchain,Tech and other passion project industries.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Our Vision  */}
      <div id="mission" className='max-w-[1440px] mx-auto lg:px-9 md:px-6 sm:px-4 px-2.5'>
        <h1 className='border-s border-e border-b border-[#BBBFCA] text-white lg:text-[40px] md:text-4xl sm:text-3xl text-[26px] font-medium m-0 lg:px-6 md:px-4 sm:px-3 px-2 lg:pt-12 md:pt-10 pt-9 lg:pb-7 md:pb-5 sm:pb-4 pb-3' >
          Our Vision</h1>
        <div className='border-s border-e border-b-0 border-[#BBBFCA]'>
          <div className='flex lg:flex-row flex-col-reverse gap-8 md:px-5 sm:px-3 px-2 lg:py-12 md:py-9 sm:py-7 py-5'>
            <div className='lg:max-w-[365px] w-full lg:pt-0 pt-7'>
              <p className='text-[#F4F4F2] font-light text-sm m-0 ' >
                At our core, we focus on collective innovation and entrepreneurship. It helps us achieve three main goals: growing wealth, encouraging innovation, and making a real impact on society. We focus on more than just the bottom line, aiming to create something lasting for both our ventures and the world around us.
                <br /><br />
                When we focus on creating value — financial, technological, and social — the pieces naturally fall into place and we have the track record to prove it.
              </p>
            </div>
            <div className='flex-grow grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-5 place-items-center'>
              <div className=''>
                <div className='max-w-[236px] max-h-[236px] border border-[#BBBFCA]'>
                  <Image
                    src={financeImage}
                    width={236}
                    height={236}
                    alt='financial'
                    className='w-[236px] h-[236px] object-contain w-full'
                  />
                </div>
                <h2 className='text-[#F4F4F2] font-medium text-[16px] flex items-center gap-2 mt-2 uppercase'>
                  <Image
                    src={BottomleftAngle}
                    width={12}
                    height={12}
                    alt='BottomLeftTriangle'
                    className='w-3 h-3 object-contain '
                  />
                  <span>financial</span>
                </h2>
              </div>
              <div className=''>
                <div className='max-w-[236px] max-h-[236px] border border-[#BBBFCA]'>
                  <Image
                    src={technoligicalImage}
                    width={236}
                    height={236}
                    alt='technological'
                    className='w-[236px] h-[236px] object-contain w-full'
                  />
                </div>
                <h2 className='text-[#F4F4F2] font-medium text-[16px] flex items-center gap-2 mt-2 uppercase'>
                  <Image
                    src={BottomleftAngle}
                    width={12}
                    height={12}
                    alt='BottomLeftTriangle'
                    className='w-3 h-3 object-contain '
                  />
                  <span>technological</span>
                </h2>
              </div>
              <div className=''>
                <div className='max-w-[236px] max-h-[236px] border border-[#BBBFCA]'>
                  <Image
                    src={socialImage}
                    width={236}
                    height={236}
                    alt='social'
                    className='w-[236px] h-[236px] object-contain w-full'
                  />
                </div>
                <h2 className='text-[#F4F4F2] font-medium text-[16px] flex items-center gap-2 mt-2 uppercase'>
                  <Image
                    src={BottomleftAngle}
                    width={12}
                    height={12}
                    alt='BottomLeftTriangle'
                    className='w-3 h-3 object-contain '
                  />
                  <span>social</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-[1440px] mx-auto lg:px-9 md:px-6 sm:px-4 px-2.5'>
        <MultiCardCarouselEpertiseBrands />
      </div>
      {/* Our Expertise  */}
      <div id="expertise" className='max-w-[1440px] mx-auto lg:px-9 md:px-6 sm:px-4 px-2.5'>
        <MultiCardCarouselEpertiseDefiFund sectionTitle="Our Expertise" customclass="expertise" path='' navigation={true} />
      </div>
      {/* Our Values  */}
      <div className='max-w-[1440px] mx-auto lg:px-9 md:px-6 sm:px-4 px-2.5'>
        <h1 className='border-s border-e border-b border-[#BBBFCA] text-white lg:text-[40px] md:text-4xl sm:text-3xl text-[26px] font-medium m-0 lg:px-6 md:px-4 sm:px-3 px-2 lg:pt-12 md:pt-10 pt-9 lg:pb-7 md:pb-5 sm:pb-4 pb-3' >
          Our Values</h1>
        <div className='border-s border-e border-b border-[#BBBFCA]'>
          <div className='grid md:grid-cols-3 grid-cols-1 gap-0'>
            <div>
              <Image
                height={450}
                width={450}
                src={handGroup}
                alt="Hands Group"
                className="object-contain w-full h-full"
              />
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-0 col-span-2 border-[#BBBFCA] md:border-t-0 border-t'>
              <div className='px-6 py-7 border border-t-0 md:border-s border-s-0 md:border-e border-e-0 border-[#BBBFCA]'>
                <h2 className='text-[white] font-medium text-[16px] flex items-center gap-2 mb-4 uppercase'>
                  <Image
                    src={BottomleftAngle}
                    width={12}
                    height={12}
                    alt='BottomLeftTriangle'
                    className='w-3 h-3 object-contain '
                  />
                  <span>Integrity</span>
                </h2>
                <p className='text-[#F4F4F2] font-light text-sm m-0'>
                  We follow an ethos of personal responsibility and reliability
                </p>
              </div>
              <div className='px-6 py-7 border-b border-[#BBBFCA]'>
                <h2 className='text-[white] font-medium text-[16px] flex items-center gap-2 mb-4 uppercase'>
                  <Image
                    src={BottomleftAngle}
                    width={12}
                    height={12}
                    alt='BottomLeftTriangle'
                    className='w-3 h-3 object-contain '
                  />
                  <span>Transparency</span>
                </h2>
                <p className='text-[#F4F4F2] font-light text-sm m-0'>
                  We’re an open book, sharing data freely with our brands
                </p>
              </div>
              <div className='px-6 py-7 border border-t-0 md:border-s border-s-0 md:border-e border-e-0 border-[#BBBFCA]'>
                <h2 className='text-[white] font-medium text-[16px] flex items-center gap-2 mb-4 uppercase'>
                  <Image
                    src={BottomleftAngle}
                    width={12}
                    height={12}
                    alt='BottomLeftTriangle'
                    className='w-3 h-3 object-contain '
                  />
                  <span>Simplicity</span>
                </h2>
                <p className='text-[#F4F4F2] font-light text-sm m-0'>
                  Jargon-free, clear, and straightforward communication
                </p>
              </div>
              <div className='px-6 py-7 border-b border-[#BBBFCA]'>
                <h2 className='text-[white] font-medium text-[16px] flex items-center gap-2 mb-4 uppercase'>
                  <Image
                    src={BottomleftAngle}
                    width={12}
                    height={12}
                    alt='BottomLeftTriangle'
                    className='w-3 h-3 object-contain '
                  />
                  <span>Performance</span>
                </h2>
                <p className='text-[#F4F4F2] font-light text-sm m-0'>
                  Performance-driven to get rapid results for our brands
                </p>
              </div>
              <div className='px-6 py-7 border border-t-0 md:border-b-0 border-b md:border-s border-s-0 md:border-e border-e-0 border-[#BBBFCA]'>
                <h2 className='text-[white] font-medium text-[16px] flex items-center gap-2 mb-4 uppercase'>
                  <Image
                    src={BottomleftAngle}
                    width={12}
                    height={12}
                    alt='BottomLeftTriangle'
                    className='w-3 h-3 object-contain '
                  />
                  <span>Loyalty</span>
                </h2>
                <p className='text-[#F4F4F2] font-light text-sm m-0'>
                  We’re loyal to our brands and strongly believe in shared growth
                </p>
              </div>
              <div className='px-6 py-7 border-0 border-[#BBBFCA]'>
                <h2 className='text-[white] font-medium text-[16px] flex items-center gap-2 mb-4 uppercase'>
                  <Image
                    src={BottomleftAngle}
                    width={12}
                    height={12}
                    alt='BottomLeftTriangle'
                    className='w-3 h-3 object-contain '
                  />
                  <span>Innovation</span>
                </h2>
                <p className='text-[#F4F4F2] font-light text-sm m-0'>
                  We’re always looking for solutions to problems and better ways of doing things
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Partners  */}
      <div id="partners" className='max-w-[1440px] mx-auto lg:px-9 md:px-6 sm:px-4 px-2.5'>
        <div className='border-s border-e border-b border-[#BBBFCA] lg:px-6 md:px-4 px-0 lg:py-8 md:py-7 py-6'>
          <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-4 md:gap-2 gap-0'>
            <div className='flex md:items-end items-center'>
              <h1 className='text-white lg:text-[40px] md:text-4xl sm:text-3xl text-[26px] font-medium m-0 lg:px-6 md:px-4 sm:px-3 px-2 lg:pt-12 md:pt-10 pt-9 lg:pb-7 md:pb-5 sm:pb-4 pb-3' >
                Our Partners</h1>
            </div>
            <div className='border border-[#BBBFCA] md:border-b border-b-0 md:border-e border-e-0 relative'>
              <Image
                height={12}
                width={12}
                src={ToprightIcon}
                alt="ToprightIcon"
                className="w-3 h-3 object-contain absolute top-4 right-4"
              />
              <div className='h-[140px] p-3 flex flex-col justify-center items-center'>
                <Image
                  width={243}
                  height={36}
                  src={CarbonLogo}
                  alt="Carbon Ventures"
                  className="w-full max-w-[243px] max-h-[36px] object-contain mt-3"
                />
              </div>
              <Link
                href='https://carbonventures.io/'
                className='text-white font-normal text-sm flex gap-2.5 p-4 w-full hover:bg-[#336DFF] justify-center items-center uppercase border-t group-hover:border-[#336DFF] border-[#BBBFCA]'
              >
                Website
              </Link>
            </div>
            <div className='border md:border-e border-e-0 border-[#BBBFCA] md:border-s border-s-0 relative'>
              <Image
                height={12}
                width={12}
                src={ToprightIcon}
                alt="ToprightIcon"
                className="w-3 h-3 object-contain absolute top-4 right-4"
              />
              <div className='h-[140px] p-3 flex flex-col justify-center items-center'>
                <Image
                  width={243}
                  height={36}
                  src={WaterReliefLogo}
                  alt="Water Relief"
                  className="w-full max-w-[243px] max-h-[36px] object-contain mt-3"
                />
              </div>
              <Link
                href='https://waterrelief.org/'
                className='text-white font-normal text-sm flex gap-2.5 p-4 w-full hover:bg-[#336DFF] justify-center items-center uppercase border-t group-hover:border-[#336DFF] border-[#BBBFCA]'
              >
                Website
              </Link>
            </div>
            <div className='border border-[#BBBFCA] md:border-e border-e-0 relative'>
              <Image
                height={12}
                width={12}
                src={ToprightIcon}
                alt="ToprightIcon"
                className="w-3 h-3 object-contain absolute top-4 right-4"
              />
              <div className='h-[140px] p-3 flex flex-col justify-center items-center'>
                <Image
                  width={137}
                  height={41}
                  src={PellarLogo}
                  alt="Pellar"
                  className="w-full max-w-[137px] max-h-[41px] object-contain mt-3"
                />
              </div>
              <Link
                href='https://pellar.io/'
                className='text-white font-normal text-sm flex gap-2.5 p-4 w-full hover:bg-[#336DFF] justify-center items-center uppercase border-t group-hover:border-[#336DFF] border-[#BBBFCA]'
              >
                Website
              </Link>
            </div>
            <div className='border md:border-t border-t-0 md:border-e border-e-0 md:border-s border-s-0 border-[#BBBFCA] relative'>
              <Image
                height={12}
                width={12}
                src={ToprightIcon}
                alt="ToprightIcon"
                className="w-3 h-3 object-contain absolute top-4 right-4"
              />
              <div className='h-[140px] p-3 flex flex-col justify-center items-center'>
                <Image
                  width={186}
                  height={93}
                  src={NextGenLogo}
                  alt="NextGenLogo"
                  className="w-full max-w-[186px] max-h-[93px] object-contain mt-3"
                />
              </div>
              <Link
                href='https://nextgenvisionmedia.com/'
                className='text-white font-normal text-sm flex gap-2.5 p-4 w-full hover:bg-[#336DFF] justify-center items-center uppercase border-t group-hover:border-[#336DFF] border-[#BBBFCA]'
              >
                Website
              </Link>
            </div>
            <div className='border md:border-t border-t-0 border-[#BBBFCA] md:border-e border-e-0 relative'>
              <Image
                height={12}
                width={12}
                src={ToprightIcon}
                alt="ToprightIcon"
                className="w-3 h-3 object-contain absolute top-4 right-4"
              />
              <div className='h-[140px] p-3 flex flex-col justify-center items-center'>
                <Image
                  width={160}
                  height={100}
                  src={FLIGHTFUNDLOGOWHITE}
                  alt="FLIGHTFUNDLOGOWHITE"
                  className="w-full max-w-[160px] max-h-[100px] object-contain mt-3"
                />
              </div>
              <Link
                href='https://flightfund.com/'
                className='text-white font-normal text-sm flex gap-2.5 p-4 w-full hover:bg-[#336DFF] justify-center items-center uppercase border-t group-hover:border-[#336DFF] border-[#BBBFCA]'
              >
                Website
              </Link>
            </div>
            <div className='border md:border-t border-t-0 border-e md:border-s border-s-0 border-[#BBBFCA] relative'>
              <Image
                height={12}
                width={12}
                src={ToprightIcon}
                alt="ToprightIcon"
                className="w-3 h-3 object-contain absolute top-4 right-4"
              />
              <div className='h-[140px] p-3 flex flex-col justify-center items-center'>
                <Image
                  width={280}
                  height={129}
                  src={HarLogo}
                  alt="HarLogo"
                  className="w-full max-w-[280px] max-h-[129px] object-contain mt-3"
                />
              </div>
              <Link
                href='https://www.hartmanncapital.com/'
                className='text-white font-normal text-sm flex gap-2.5 p-4 w-full hover:bg-[#336DFF] justify-center items-center uppercase border-t group-hover:border-[#336DFF] border-[#BBBFCA]'
              >
                Website
              </Link>
            </div>
            <div className='hidden border md:border-t border-t-0 border-[#BBBFCA] md:border-e border-e-0 relative'>
              <Image
                height={12}
                width={12}
                src={ToprightIcon}
                alt="ToprightIcon"
                className="w-3 h-3 object-contain absolute top-4 right-4"
              />
              <div className='h-[140px] p-3 flex flex-col justify-center items-center'>
                <Image
                  width={186}
                  height={93}
                  src={NextGenLogo}
                  alt="NextGenLogo"
                  className="w-full max-w-[186px] max-h-[93px] object-contain mt-3"
                />
              </div>
              <Link
                href=''
                className='text-white font-normal text-sm flex gap-2.5 p-4 w-full hover:bg-[#336DFF] justify-center items-center uppercase border-t group-hover:border-[#336DFF] border-[#BBBFCA]'
              >
                Website
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Our Brands  */}
      <div id="brands" className=' max-w-[1440px] mx-auto lg:px-9 md:px-6 sm:px-4 px-2.5'>
        <h1 className='hidden border-s border-e border-b border-[#BBBFCA] uppercase text-white text-center lg:text-[70px] md:text-[60px] sm:text-[46px] text-[36px] font-normal m-0 lg:px-6 md:px-4 sm:px-3 px-2 lg:py-8 md:py-7 py-6' >
          From Vision to Market Success
        </h1>
        <MultiCardCarouselBrands sectionTitle="Our Brands" customclass="brands" path='' navigation={true} />
      </div>
      <div className="max-w-[1440px] mx-auto lg:px-9 md:px-6 sm:px-4 px-2.5">
        <div className='flex md:flex-row flex-col justify-between items-center gap-6  lg:py-12 md:py-10 pt-9 pb-0  border-e border-s border-b border-[#BBBFCA]'>
          <p className='text-white lg:text-[20px] text-[18px] font-normal m-0 lg:px-6 md:px-4 sm:px-3 px-2 max-w-[840px]' >
            Contact us if you believe you have a brand that fits our “Family” or would like to get in touch with one of our brands.
          </p>
          <Link
            href='https://tally.so/r/np51G1'
            className='h-fit md:max-w-[340px] min-w-[25%] text-white font-medium text-sm flex gap-2.5 p-4 w-full bg-[#336DFF] justify-end items-center hover:bg-[#336DFF]/80'
          >
            Contact Us
            <Image
              src={ForwardArrow}
              width={12}
              height={12}
              alt='Icon'
              className='w-3 h-3 object-contain '
            />
          </Link>
        </div>
      </div>
      {/* Why Choose US  */}
      <div className="max-w-[1440px] mx-auto lg:px-9 md:px-6 sm:px-4 px-2.5 flex md:flex-row flex-col">
        <div className=' border-e border-s border-b border-[#BBBFCA]'>
          <h1 className='text-white lg:text-[40px] md:text-4xl sm:text-3xl text-[26px] font-medium m-0 lg:px-6 md:px-4 sm:px-3 px-2 lg:pt-12 md:pt-10 pt-9 lg:pb-7 md:pb-5 sm:pb-4 pb-3' >
            Why Choose Aweh Ventures?
          </h1>
          <div className='lg:px-6 md:px-4 sm:px-3 px-2 lg:pb-12 md:pb-9 sm:pb-7 pb-5'>
            <p className='text-[#F4F4F2] font-light text-sm m-0'>
              We know what it takes to build and scale a digital business because we’ve been there. Our founder-led approach means we create clear roadmaps to growth.
            </p>
            <ul className='list-none lg:py-7 md:py-5 py-4'>
              <li className='text-[#F4F4F2] font-light text-sm flex items-center gap-2 mb-4'>
                <Image
                  src={BottomleftAngle}
                  width={12}
                  height={12}
                  alt='BottomLeftTriangle'
                  className='w-3 h-3 object-contain '
                />
                <span>Direct mentorship from industry experts</span>
              </li>
              <li className='text-[#F4F4F2] font-light text-sm flex items-center gap-2 mb-4'>
                <Image
                  src={BottomleftAngle}
                  width={12}
                  height={12}
                  alt='BottomLeftTriangle'
                  className='w-3 h-3 object-contain '
                />
                <span>A network of top industry contacts</span>
              </li>
              <li className='text-[#F4F4F2] font-light text-sm flex items-center gap-2 mb-4'>
                <Image
                  src={BottomleftAngle}
                  width={12}
                  height={12}
                  alt='BottomLeftTriangle'
                  className='w-3 h-3 object-contain '
                />
                <span>Battle-tested methods to grow digital businesses</span>
              </li>
            </ul>
            <p className='text-[#F4F4F2] font-light text-sm m-0'>
              Aweh Ventures is a private family office focused on managing and growing digital brands. We grew up in households that combined business and family, which instilled in us the belief that for businesses to flourish, the motivation needs to come from the heart.
              <br /><br />
              Our values guide our decisions. We operate privately, and focus on long-term aspirations of building our businesses and brands. We operate on a philosophy of <span className='text-[#B580FC]'>“Ubuntu”</span>, a South African proverb that means <span className='text-[#B580FC]'>“I am, Because we are”.</span> Through Ubuntu we believe that we are defined by our compassion & humility towards others and apply these principles throughout our business.
            </p>
          </div>
        </div>
        <div className='border-e md:border-l-0 border-l border-b border-[#BBBFCA] lg:p-6 md:p-5 p-4 flex items-center justify-center'>
          <Image
            src={MapIconChoose}
            width={415}
            height={467}
            alt='Map Why Choose'
            className='md:h-auto md:w-auto h-full w-full lg:max-w-[415px] lg:max-h-[467px] md:max-h-[380px] md:max-w-[300px] max-w-[400px] max-h-[360px] object-contain '
          />
        </div>
      </div>
      {/* Our Edge  */}
      <div className="max-w-[1440px] mx-auto lg:px-9 md:px-6 sm:px-4 px-2.5 ">
        <div className=' border-e border-s border-[#BBBFCA]'>
          <h1 className='text-white lg:text-[40px] md:text-4xl sm:text-3xl text-[26px] font-medium m-0 lg:px-6 md:px-4 sm:px-3 px-2 lg:pt-12 md:pt-10 pt-9 lg:pb-7 md:pb-5 sm:pb-4 pb-3' >Our Edge</h1>
          <div className='flex lg:gap-20 md:gap-16 sm:gap-10 gap-6 lg:px-6 md:px-4 sm:px-3 px-2 flex-col md:flex-row lg:py-12 md:py-8 py-6 border-t border-[#BBBFCA]'>
            <p className='text-[#F4F4F2] font-light text-sm m-0'>
              Aweh Ventures is unique in the way we apply passion and hard work to build brands. Our large collective network shares skills from a variety of sectors, helping each other learn and succeed, even through the toughest of challenges.
              <br /><br />
              Aweh Ventures stands out due to our founder-led Web3 experience, successfully operating and exiting two blockchain companies.
            </p>
            <p className='text-[#F4F4F2] font-light text-sm m-0'>
              This gives us valuable insights and operational expertise that many traditional investors lack. We have built a thriving network in the blockchain sector, perfectly positioning us to offer strategic advice and investment to businesses entering the digital space.
            </p>
          </div>
          <Link
            href='https://tally.so/r/np51G1'
            className='text-white font-medium text-sm flex gap-2.5 p-4 w-full bg-[#336DFF] justify-center items-center hover:bg-[#336DFF]/80'
          >
            Contact Us
            <Image
              src={ForwardArrow}
              width={12}
              height={12}
              alt='Icon'
              className='w-3 h-3 object-contain '
            />
          </Link>
        </div>

      </div>
      <Footer />
    </div>
  )
}
export default FrontPageV2