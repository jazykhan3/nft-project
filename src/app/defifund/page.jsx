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
import FundPerformanceImage from '../../../public/assets/images/funds-performance.png'
import growthLogo from '../../../public/assets/images/growth-icon.png';
import assettradeLogo from '../../../public/assets/images/asset-trade.png';
import assetmanageLogo from '../../../public/assets/images/asset-manage.png';
import CryptoCard from './CryptoCard'


const DefiFund = () => {  
  return (
    <>
      <Header />
      {/* Aweh Ventures & Asset management Section */}
      <div className='max-w-[1440px] mx-auto lg:px-9 md:px-6 sm:px-4 px-2.5'>
        <div className='border-b border-s border-e border-[#5D5D5D] grid lg:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-8 '>
          <div className='lg:px-7 md:px-4 px-2 lg:py-10 md:py-7 py-4 lg:col-span-1 md:col-span-2 col-span-full'>
            <h1 className='text-white lg:text-[40px] md:text-4xl sm:text-3xl text-[26px] font-medium m-0' >
              Aweh Ventures <br />
              asset management
            </h1>
            <div className='relative lg:px-10 md:px-8 sm:px-6 px-4 py-4'>
              <p className='text-[#F0F2F5] font-light text-sm m-0 max-w-[630px]  mx-auto relative'>
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
          <div className='md:block hidden col-span-1'>
          </div>
        </div>
      </div>
      {/* On Chain Fuds */}
      <div className='max-w-[1440px] mx-auto lg:px-9 md:px-6 sm:px-4 px-2.5'>
        <div className='border-b border-s border-e border-[#5D5D5D] grid lg:grid-cols-5 md:grid-cols-4 grid-cols-1 lg:gap-5 md:gap-3 gap-0'>
          <div className='lg:px-7 md:px-4 px-2 py-4 lg:col-span-3 md:col-span-2 col-span-full md:order-1 order-2'>
            <p className='md:block hidden max-w-[650px] text-white font-medium text-[24px] m-0'>
              On-Chain Funds Designed for Every Risk Level
              A Proven History of Success Over 5 Years
            </p>
            <Image
              src={FundPerformanceImage}
              width={710}
              height={400}
              alt='FundPerformanceImage'
              className=' w-full object-contain mt-3'
            />
          </div>
          <div className='col-span-2 flex flex-col items-center justify-center lg:px-7 md:px-4 px-2 md:order-2 order-1'>
            <p className='md:hidden block text-white font-medium text-[24px] m-0 my-3 leading-6'>
              On-Chain Funds Designed for Every Risk Level
              A Proven History of Success Over 5 Years
            </p>
            <ul className='list-disc md:ps-0 ps-5'>
              <li className='text-white font-medium lg:text-[24px] md:text-[22px] text-[18px]'>
                Average Annual APY of approximately 22.23% since 2020
              </li>
              <li className='text-white font-medium text-[24px]'>
                $5 Million in Assets Under Management
              </li>
              <li className='text-white font-medium text-[24px]'>
                Over 10 Years of Experience from Experts at Binance and Capgemini
              </li>

            </ul>
          </div>
        </div>
      </div>
      {/* Our Funds */}
      <div className='max-w-[1440px] mx-auto lg:px-9 md:px-6 sm:px-4 px-2.5'>
        <div className="border-s border-e border-b border-[#5D5D5D] lg:px-6 md:px-4 sm:px-3 px-2 lg:pt-9 md:pt-7 pt-9 lg:pb-5 md:pb-5 sm:pb-4 pb-3">
          <h1 className=' text-white lg:text-[40px] md:text-4xl sm:text-3xl text-[26px] font-medium m-0 ' >
            Our Funds</h1>
          <p className='text-[#F0F2F5] font-light text-sm m-0 max-w-[630px]'>
            Aweh Ventures institutional-grade DeFi products run on blockchain technology and provide investors with a unique range of strategies for a variety of risk appetites.
          </p>
        </div>
        <div className=' border-s border-e border-[#5D5D5D] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-5'>
          <div className='flex justify-center items-center px-6'>
            <CryptoCard />
          </div>
          <div className='flex justify-center items-center px-6'>
          <CryptoCard />
          </div>
          <div className='flex justify-center items-center px-6'>
          <CryptoCard />
          </div>
        </div>
        <p className='border-s border-b border-e border-[#5D5D5D] lg:px-6 md:px-4 sm:px-3 px-2 py-6'>
          *We Recommend investing for a minimum of 5 years
          <br />
          *Investment Value can go up as well as down, Capital is not guaranteed
          <br />
          *Redemptions Available on a quarterly basis
          <br />
          *Funds are accessible by Invite Only
        </p>
      </div>

      {/* Why Aweh Ventures? */}
      <div className='max-w-[1440px] mx-auto lg:px-9 md:px-6 sm:px-4 px-2.5'>
        <h1 className='border-s border-e border-b border-[#5D5D5D] text-white lg:text-[40px] md:text-4xl sm:text-3xl text-[26px] font-medium m-0 lg:px-6 md:px-4 sm:px-3 px-2 lg:pt-12 md:pt-10 pt-9 lg:pb-7 md:pb-5 sm:pb-4 pb-3' >
          Why Aweh Ventures?
        </h1>
        <div className='border-s border-e border-b border-[#5D5D5D]'>
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
            <div className='grid md:grid-cols-2 grid-cols-1 gap-0 col-span-2 border-[#5D5D5D] md:border-t-0 border-t'>
              <div className='px-6 py-7 border border-t-0 md:border-s border-s-0 md:border-e border-e-0 border-[#5D5D5D]'>
                <h2 className='text-[#F0F2F5] font-medium text-[16px] flex items-center gap-2 mb-4 uppercase'>
                  <Image
                    src={BottomleftAngle}
                    width={12}
                    height={12}
                    alt='BottomLeftTriangle'
                    className='w-3 h-3 object-contain '
                  />
                  <span>Institutional grade product</span>
                </h2>
                <p className='text-[#F0F2F5] font-light text-sm m-0'>
                  Dive into the world of crypto with products designed for both Professional investors and Crypto-Novices, leveraging the power of DeFi.
                </p>
              </div>
              <div className='px-6 py-7 border-b border-[#5D5D5D]'>
                <h2 className='text-[#F0F2F5] font-medium text-[16px] flex items-center gap-2 mb-4 uppercase'>
                  <Image
                    src={BottomleftAngle}
                    width={12}
                    height={12}
                    alt='BottomLeftTriangle'
                    className='w-3 h-3 object-contain '
                  />
                  <span>Rigorous due diligence</span>
                </h2>
                <p className='text-[#F0F2F5] font-light text-sm m-0'>
                  We conduct thorough due diligence, aligning strategies with our unique investment profile balancing risk vs reward.
                </p>
              </div>
              <div className='px-6 py-7 border border-t-0 md:border-s border-s-0 md:border-e border-e-0 border-[#5D5D5D]'>
                <h2 className='text-[#F0F2F5] font-medium text-[16px] flex items-center gap-2 mb-4 uppercase'>
                  <Image
                    src={BottomleftAngle}
                    width={12}
                    height={12}
                    alt='BottomLeftTriangle'
                    className='w-3 h-3 object-contain '
                  />
                  <span>Live Auditability</span>
                </h2>
                <p className='text-[#F0F2F5] font-light text-sm m-0'>
                  Utilise a comprehensive suite of performance metrics, including real-time and historical performance, for informed decision-making.
                </p>
              </div>
              <div className='px-6 py-7 border-b border-[#5D5D5D]'>
                <h2 className='text-[#F0F2F5] font-medium text-[16px] flex items-center gap-2 mb-4 uppercase'>
                  <Image
                    src={BottomleftAngle}
                    width={12}
                    height={12}
                    alt='BottomLeftTriangle'
                    className='w-3 h-3 object-contain '
                  />
                  <span>No Counterparty Risk</span>
                </h2>
                <p className='text-[#F0F2F5] font-light text-sm m-0'>
                  Our solutions offer automatic trade settlements and smart contract automation, eliminating counterparty risk.
                </p>
              </div>
              <div className='px-6 py-7 border border-t-0 md:border-b-0 border-b md:border-s border-s-0 md:border-e border-e-0 border-[#5D5D5D]'>
                <h2 className='text-[#F0F2F5] font-medium text-[16px] flex items-center gap-2 mb-4 uppercase'>
                  <Image
                    src={BottomleftAngle}
                    width={12}
                    height={12}
                    alt='BottomLeftTriangle'
                    className='w-3 h-3 object-contain '
                  />
                  <span>Cost-Effective </span>
                </h2>
                <p className='text-[#F0F2F5] font-light text-sm m-0'>
                  Experience a drastic reduction in operational costs, coupled with automated administrative functions and accelerated market entry.
                </p>
              </div>
              <div className='px-6 py-7 border-0 border-[#5D5D5D]'>
                <h2 className='text-[#F0F2F5] font-medium text-[16px] flex items-center gap-2 mb-4 uppercase'>
                  <Image
                    src={BottomleftAngle}
                    width={12}
                    height={12}
                    alt='BottomLeftTriangle'
                    className='w-3 h-3 object-contain '
                  />
                  <span>Flexible Custody Options</span>
                </h2>
                <p className='text-[#F0F2F5] font-light text-sm m-0'>
                  Investors have the liberty to self-custody their assets or opt for our qualified custodian services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benifits for investers */}
      <div className='max-w-[1440px] mx-auto lg:px-9 md:px-6 sm:px-4 px-2.5'>
        <h1 className='border-s border-e border-[#5D5D5D] text-white lg:text-[40px] md:text-4xl sm:text-3xl text-[26px] font-medium m-0 lg:px-6 md:px-4 sm:px-3 px-2 lg:pt-12 md:pt-10 pt-9 lg:pb-7 md:pb-5 sm:pb-4 pb-3' >
          Benefits For Investors
        </h1>
        <div className='border border-[#5D5D5D]'>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-0'>
            <div className="relative flex flex-col md:border-e border-e-0 lg:border-b-0 border-b border-[#5D5D5D] py-6 px-7">
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
                <h3 className='text-[22px] font-normal text-white mb-6 uppercase leading-7'>Diverse Crypto <br />Exposure</h3>
                <p className="text-sm font-light text-[#F0F2F5] mb-2">
                  Minimise operational costs while gaining exposure to crypto markets through active rebalancing and DeFi strategies.
                </p>
              </div>
            </div>
            <div className="relative flex flex-col lg:border-e border-e-0 lg:border-b-0 border-b border-[#5D5D5D] py-6 px-7">
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
                <h3 className='text-[22px] font-normal text-white mb-6 uppercase leading-7'>Efficient Portfolio <br />Management</h3>
                <p className="text-sm font-light text-[#F0F2F5] mb-2">
                  Leverage the Ethereum blockchain for efficient and transparent portfolio management.
                </p>
              </div>
            </div>
            <div className="relative flex flex-col lg:border-e-0 md:border-e border-e-0 border-[#5D5D5D] py-6 px-7">
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
                <h3 className='text-[22px] font-normal text-white mb-6 uppercase leading-7'>On-Chain <br />Transparency</h3>
                <p className="text-sm font-light text-[#F0F2F5] mb-2">
                  Benefit from on-chain transparency and auditability via the Enzyme protocol.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Learn More About our offerings */}
      <div className='max-w-[1440px] mx-auto lg:px-9 md:px-6 sm:px-4 px-2.5'>
        <h1 className='border-s border-e border-b border-[#5D5D5D] text-white lg:text-[40px] md:text-4xl sm:text-3xl text-[26px] font-medium m-0 lg:px-6 md:px-4 sm:px-3 px-2 lg:pt-12 md:pt-10 pt-9 lg:pb-7 md:pb-5 sm:pb-4 pb-3' >
          Learn More About our offerings
        </h1>
        <div className='border-b border-s border-e border-[#5D5D5D]'>
          <div className='grid md:grid-cols-3 grid-cols-1 gap-0'>
            <div className='relative p-10 md:border-e border-e-0 border-[#5D5D5D] flex items-center justify-center'>
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
              <form className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-6">
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

                {/* Contact Number */}
                <div className="flex flex-col">
                  <label className='text-white font-normal text-sm flex items-center gap-2 mb-3 uppercase'>
                    <Image
                      src={BottomleftAngle}
                      width={12}
                      height={12}
                      alt='BottomLeftTriangle'
                      className='w-3 h-3 object-contain '
                    />
                    <span>Contact Number</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your contact number"
                    className="border border-[#f4f4f4] hover:border-[#B580FC] focus:border-[#B580FC] px-4 py-3 text-white placeholder-[#a3a3a3] focus:outline-none text-[16px] text-normal"
                  />
                </div>

                {/* Linkedin */}
                <div className="flex flex-col">
                  <label className='text-white font-normal text-sm flex items-center gap-2 mb-3 uppercase'>
                    <Image
                      src={BottomleftAngle}
                      width={12}
                      height={12}
                      alt='BottomLeftTriangle'
                      className='w-3 h-3 object-contain '
                    />
                    <span>LinkedIn</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your LinkedIn link"
                    className="border border-[#f4f4f4] hover:border-[#B580FC] focus:border-[#B580FC] px-4 py-3 text-white placeholder-[#a3a3a3] focus:outline-none text-[16px] text-normal"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col sm:col-span-2">
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

                {/* Button */}
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-[#336DFF] hover:bg-[#336DFF]/85 transition-colors duration-300 py-3 uppercase text-sm tracking-wide font-semibold"
                  >
                    Get In Touch ↗
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
export default DefiFund