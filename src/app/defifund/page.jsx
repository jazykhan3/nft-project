import Footer from '@/app/components/footer/footer'
import Header from '@/app/components/header/header'
import Image from 'next/image'
import React from 'react'
import ToprightIcon from '../../../public/assets/images/top-right-triangle.png';
import TopLeftTriangle from '../../../public/assets/images/top-left-triangle.png'
import BottomleftAngle from '../../../public/assets/images/bottom-left-triangle.png'
import BottomRightTriangle from '../../../public/assets/images/bottom-right-triangle.png'
import PersonShareImage from '../../../public/assets/images/share-icon.png'
import handGroup from '../../../public/assets/images/handGroup.png';
import CryptoCard from './CryptoCard'
import Link from 'next/link';
import FundPerformanceChart from './FundPerformanceChart';
import ForwardArrow from '../../../public/assets/images/forward-arrow.png'
import MultiCardCarouselEpertiseDefiFund from '../components/expertiseSlider/expertiseSliderDefiFund';
import FAQ from './faq';
import InfoIcon from '../../../public/assets/images/info-circle.svg'
import ClockCircleIcon from '../../../public/assets/images/clock-regular.svg'
import Calendericon from '../../../public/assets/images/calender.svg'
import personsicon from '../../../public/assets/images/person-combines.svg'
import MultiCardCarouselInvestersDefiFund from '../components/expertiseSlider/InvestersDefiFunds';



const DefiFund = () => {
  return (
    <>
      <Header />
      {/* Aweh Ventures & Asset management Section */}
      <div className='max-w-[1440px] mx-auto lg:px-9 md:px-6 sm:px-4 px-2.5'>
        <div className='border-b border-s border-e border-[#BBBFCA] lg:py-10 md:py-7 py-4'>
          <div className='lg:px-7 md:px-4 px-2 lg:col-span-1 md:col-span-2 col-span-full max-w-[650px] mx-auto'>
            <h1 className='text-white lg:text-[40px] md:text-4xl sm:text-3xl text-[26px] font-medium m-0' >
              Aweh Ventures <br />
              asset management
            </h1>
            <div className='relative lg:px-10 md:px-8 sm:px-6 px-4 py-4'>
              <p className='text-[#F4F4F2] font-light text-sm m-0 max-w-[630px]  mx-auto relative'>
                Aweh Ventures is one of the crypto industry’s leading asset management firms. With a deep understanding of digital assets, blockchain and the DeFi ecosystem, our asset management strategies are designed to meet the risk appetite of our ourselves and our clients.
              </p>
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
        </div>
      </div>
      {/* On Chain Fuds */}
      <div className='max-w-[1440px] mx-auto lg:px-9 md:px-6 sm:px-4 px-2.5'>
           <h1 className='text-white lg:text-[40px] md:text-4xl sm:text-3xl text-[26px] font-medium m-0 lg:px-7 md:px-4 px-2 py-4 border-s border-e border-[#BBBFCA]' >
              Funds Performance
            </h1>
        <div className=" grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 text-center lg:px-7 md:px-4 px-2 py-4 border-s border-e border-[#BBBFCA]">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="text-gray-600 text-sm">Average Annual APY</p>
            <p className="text-2xl font-bold text-blue-900">~22.23%</p>
            <p className="text-sm text-gray-500">since 2020</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="text-gray-600 text-sm">Assets Under Management</p>
            <p className="text-2xl font-bold text-blue-900">$5 Million</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="text-gray-600 text-sm">Expert Experience</p>
            <p className="text-2xl font-bold text-blue-900">10+ Years</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="text-gray-600 text-sm">Total Projects</p>
            <p className="text-2xl font-bold text-blue-900">20+</p>
            <p className="text-sm text-gray-500">invested across blockchain</p>
          </div>
        </div>


        <div className=' lg:px-7 md:px-4 px-2 py-4 border-b border-s border-e border-[#BBBFCA]'>
          <FundPerformanceChart />
        </div>
      </div>
      {/* Our Funds */}
      <div className='max-w-[1440px] mx-auto lg:px-9 md:px-6 sm:px-4 px-2.5'>
        <div className="border-s border-e border-[#BBBFCA] lg:px-6 md:px-4 sm:px-3 px-2 lg:pt-9 md:pt-7 pt-9 lg:pb-5 md:pb-5 sm:pb-4 pb-3">
          <h1 className=' text-white lg:text-[40px] md:text-4xl sm:text-3xl text-[26px] font-medium m-0 ' >
            Our Funds</h1>
          <p className='text-[#F4F4F2] font-light text-sm m-0 max-w-[630px]'>
            Aweh Ventures institutional-grade DeFi products run on blockchain technology and provide investors with a unique range of strategies for a variety of risk appetites.
          </p>
        </div>
        <div className='border-s border-b border-e border-[#BBBFCA] flex justify-end'>
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
        {/* <div className='hidden border-s border-e border-[#BBBFCA]  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-5'>
          <div className='flex justify-center items-center px-6'>
            <CryptoCard />
          </div>
          <div className='flex justify-center items-center px-6'>
            <CryptoCard />
          </div>
          <div className='flex justify-center items-center px-6'>
            <CryptoCard />
          </div>
        </div> */}

        <div className='border-s border-e border-[#BBBFCA] lg:px-6 md:px-4 sm:px-3 px-2 py-6'>
          <h4 className=' text-white lg:text-[28px] md:text-[24px] sm:text-[20px] text-[18px] font-medium m-0 ' >
            Investment Notes
          </h4>
          <p className='flex items-center gap-3 mb-3'>
            <Image
              src={ClockCircleIcon}
              width={16}
              height={16}
              alt='Icon'
              className='w-4 h-4 object-contain '
            />
            <span>Recommended minimum investment period: 5 years</span>
          </p>
          <p className='flex items-center gap-3 mb-3'>
            <Image
              src={InfoIcon}
              width={16}
              height={16}
              alt='Icon'
              className='w-4 h-4 object-contain '
            />
            <span>Investment value can go up as well as down; capital is not guaranteed</span>
          </p>
          <p className='flex items-center gap-3 mb-3'>
            <Image
              src={Calendericon}
              width={16}
              height={16}
              alt='Icon'
              className='w-4 h-4 object-contain '
            />
            <span>Redemptions: Quarterly</span>
          </p>
          <p className='flex items-center gap-3'>
            <Image
              src={personsicon}
              width={16}
              height={16}
              alt='Icon'
              className='w-4 h-4 object-contain '
            />
            <span>Funds: Invite Only</span>
          </p>
        </div>
      </div>

      {/* Why Aweh Ventures? */}
      <div className='max-w-[1440px] mx-auto lg:px-9 md:px-6 sm:px-4 px-2.5'>
        <h1 className='border border-[#BBBFCA] text-white lg:text-[40px] md:text-4xl sm:text-3xl text-[26px] font-medium m-0 lg:px-6 md:px-4 sm:px-3 px-2 lg:pt-12 md:pt-10 pt-9 lg:pb-7 md:pb-5 sm:pb-4 pb-3' >
          Why Aweh Ventures?
        </h1>
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
                <h2 className='text-[#F4F4F2] font-medium text-[16px] flex items-center gap-2 mb-4 uppercase'>
                  <Image
                    src={BottomleftAngle}
                    width={12}
                    height={12}
                    alt='BottomLeftTriangle'
                    className='w-3 h-3 object-contain '
                  />
                  <span>Institutional grade product</span>
                </h2>
                <p className='text-[#F4F4F2] font-light text-sm m-0'>
                  Dive into the world of crypto with products designed for both Professional investors and Crypto-Novices, leveraging the power of DeFi.
                </p>
              </div>
              <div className='px-6 py-7 border-b border-[#BBBFCA]'>
                <h2 className='text-[#F4F4F2] font-medium text-[16px] flex items-center gap-2 mb-4 uppercase'>
                  <Image
                    src={BottomleftAngle}
                    width={12}
                    height={12}
                    alt='BottomLeftTriangle'
                    className='w-3 h-3 object-contain '
                  />
                  <span>Rigorous due diligence</span>
                </h2>
                <p className='text-[#F4F4F2] font-light text-sm m-0'>
                  We conduct thorough due diligence, aligning strategies with our unique investment profile balancing risk vs reward.
                </p>
              </div>
              <div className='px-6 py-7 border border-t-0 md:border-s border-s-0 md:border-e border-e-0 border-[#BBBFCA]'>
                <h2 className='text-[#F4F4F2] font-medium text-[16px] flex items-center gap-2 mb-4 uppercase'>
                  <Image
                    src={BottomleftAngle}
                    width={12}
                    height={12}
                    alt='BottomLeftTriangle'
                    className='w-3 h-3 object-contain '
                  />
                  <span>Live Auditability</span>
                </h2>
                <p className='text-[#F4F4F2] font-light text-sm m-0'>
                  Utilise a comprehensive suite of performance metrics, including real-time and historical performance, for informed decision-making.
                </p>
              </div>
              <div className='px-6 py-7 border-b border-[#BBBFCA]'>
                <h2 className='text-[#F4F4F2] font-medium text-[16px] flex items-center gap-2 mb-4 uppercase'>
                  <Image
                    src={BottomleftAngle}
                    width={12}
                    height={12}
                    alt='BottomLeftTriangle'
                    className='w-3 h-3 object-contain '
                  />
                  <span>No Counterparty Risk</span>
                </h2>
                <p className='text-[#F4F4F2] font-light text-sm m-0'>
                  Our solutions offer automatic trade settlements and smart contract automation, eliminating counterparty risk.
                </p>
              </div>
              <div className='px-6 py-7 border border-t-0 md:border-b-0 border-b md:border-s border-s-0 md:border-e border-e-0 border-[#BBBFCA]'>
                <h2 className='text-[#F4F4F2] font-medium text-[16px] flex items-center gap-2 mb-4 uppercase'>
                  <Image
                    src={BottomleftAngle}
                    width={12}
                    height={12}
                    alt='BottomLeftTriangle'
                    className='w-3 h-3 object-contain '
                  />
                  <span>Cost-Effective </span>
                </h2>
                <p className='text-[#F4F4F2] font-light text-sm m-0'>
                  Experience a drastic reduction in operational costs, coupled with automated administrative functions and accelerated market entry.
                </p>
              </div>
              <div className='px-6 py-7 border-0 border-[#BBBFCA]'>
                <h2 className='text-[#F4F4F2] font-medium text-[16px] flex items-center gap-2 mb-4 uppercase'>
                  <Image
                    src={BottomleftAngle}
                    width={12}
                    height={12}
                    alt='BottomLeftTriangle'
                    className='w-3 h-3 object-contain '
                  />
                  <span>Flexible Custody Options</span>
                </h2>
                <p className='text-[#F4F4F2] font-light text-sm m-0'>
                  Investors have the liberty to self-custody their assets or opt for our qualified custodian services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benifits for investers */}
      <div className='max-w-[1440px] mx-auto lg:px-9 md:px-6 sm:px-4 px-2.5'>
        <MultiCardCarouselInvestersDefiFund sectionTitle="Benefits For Investors" customclass="investers" path='' navigation={true} />
      </div>

      {/* Faq's */}

      <div className='max-w-[1440px] mx-auto lg:px-9 md:px-6 sm:px-4 px-2.5'>
        <div className="border-s border-e border-b border-[#BBBFCA] lg:px-6 md:px-4 sm:px-3 px-2 lg:pt-9 md:pt-7 pt-9 lg:pb-5 md:pb-5 sm:pb-4 pb-3">
          <h1 className=' text-white lg:text-[40px] md:text-4xl sm:text-3xl text-[26px] font-medium m-0 ' >
            Frequently Asked Questions</h1>
          <p className='text-[#F4F4F2] font-light text-sm m-0 max-w-[630px]'>
            Common questions about our DeFi fund offerings and investment approach.
          </p>
        </div>
        <div className='border-b border-s border-e border-[#BBBFCA] py-5'>
          <FAQ />
        </div>
      </div>


      {/* Learn More About our offerings */}
      <div className='max-w-[1440px] mx-auto lg:px-9 md:px-6 sm:px-4 px-2.5'>
        <h1 className='border-s border-e border-b border-[#BBBFCA] text-white lg:text-[40px] md:text-4xl sm:text-3xl text-[26px] font-medium m-0 lg:px-6 md:px-4 sm:px-3 px-2 lg:pt-12 md:pt-10 pt-9 lg:pb-7 md:pb-5 sm:pb-4 pb-3' >
          Learn More About our offerings
        </h1>
        <div className='border-b border-s border-e border-[#BBBFCA]'>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-0'>
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
            <div className='lg:col-span-2 md:grid-cols-1 flex justify-center items-end h-full'>
              <Link
                href='https://tally.so/r/3EAEDl'
                className='h-fit w-full bg-[#336DFF] hover:bg-[#336DFF]/85 transition-colors duration-300 text-center py-3 uppercase text-sm tracking-wide font-semibold'
              >
                Get In Touch ↗
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
export default DefiFund