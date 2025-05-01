import Footer from '@/app/components/footer/footer'
import Header from '@/app/components/header/header'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CarbonBrand from '../../../public/assets/images/portfolio-icons/carbon_brand.png'
import Lightthink from '../../../public/assets/images/portfolio-icons/lightlink_brand.png'
import AmpdFinance from '../../../public/assets/images/portfolio-icons/ampedfinance_brand.png'
import DecCheck from '../../../public/assets/images/portfolio-icons/dexcheck_brand.png'
import BnkFuture from '../../../public/assets/images/portfolio-icons/bnkfuture_brand.png'
import MoonBeam from '../../../public/assets/images/portfolio-icons/moonbeam_brand.png'
import Solana from '../../../public/assets/images/portfolio-icons/solanar_brand.png'
import Cookie from '../../../public/assets/images/portfolio-icons/cookie_brand.png'
import VelvetCapital from '../../../public/assets/images/portfolio-icons/velvelcapital_brand.png'
import Xyro from '../../../public/assets/images/portfolio-icons/xyro_brand.png'
import TallyUp from '../../../public/assets/images/portfolio-icons/tallyup_brand.png'
import Curate from '../../../public/assets/images/portfolio-icons/curate_brand.png'

import LOkal from '../../../public/assets/images/portfolio-icons/Lokal.png'
import Kestrl from '../../../public/assets/images/portfolio-icons/Kestral.png'
import Zenpulsar from '../../../public/assets/images/portfolio-icons/zenpulsar.png'
import Econnomi from '../../../public/assets/images/portfolio-icons/econnomi.png'


const Web3Portfolios = () => {
  return (  
    <>
      <Header />
      {/* Top Banner Section */}
      <div className='max-w-[1440px] mx-auto lg:px-9 md:px-6 sm:px-4 px-2.5'>
        <h1 className='border-s border-e border-b border-[#BBBFCA] uppercase text-white text-center lg:text-[62px] md:text-[50px] sm:text-[36px] text-[26px] font-normal m-0 lg:px-6 md:px-4 sm:px-3 px-2 lg:py-8 md:py-7 py-6' >
          our Venture Web3 Portfolio
        </h1>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-0'>
          {/* 1 */}
          <div className='border-[#BBBFCA] border border-t-0 h-[170px] flex items-center justify-center p-3'>
            <Link
              href='https://carbon.website/'
              className=''
            >
              <Image
                src={CarbonBrand}
                width={175}
                height={40}
                alt='Carbon Brand'
                className='object-contain'
              />
            </Link>
          </div>
          {/* 2 */}
          <div className='border-[#BBBFCA] border border-t-0 border-e border-s-0 h-[170px] flex items-center justify-center p-3'>
            <Link
              href='https://lightlink.io/'
              className=''
            >
              <Image
                src={Lightthink}
                width={226}
                height={24}
                alt='Lightthink Brand'
                className='object-contain'
              />
            </Link>
          </div>
          {/* 3 */}
          <div className='border-[#BBBFCA] border border-t-0 md:border-e border-e-0 md:border-s-0 border-s h-[170px] flex items-center justify-center p-3'>
            <Link
              href='https://amped.finance/#/'
              className=''
            >
              <Image
                src={AmpdFinance}
                width={249}
                height={49}
                alt='AmpdFinance Brand'
                className='object-contain'
              />
            </Link>
          </div>
          {/* 4 */}
          <div className='border-[#BBBFCA] border border-t-0 lg:border-e md:border-e-0 lg:border-s-0 border-s h-[170px] flex items-center justify-center p-3'>
            <Link
              href='https://dexcheck.ai/app'
              className=''
            >
              <Image
                src={DecCheck}
                width={188}
                height={21}
                alt='DecCheck Brand'
                className='object-contain'
              />
            </Link>
          </div>
          {/* 5 */}
          <div className='border-[#BBBFCA] border border-t-0 h-[170px] flex items-center justify-center p-3'>
            <Link
              href='https://bnktothefuture.com/'
              className=''
            >
              <Image
                src={BnkFuture}
                width={171}
                height={35}
                alt='BnkFuture Brand'
                className='object-contain'
              />
            </Link>
          </div>
          {/* 6 */}
          <div className='border-[#BBBFCA] border border-t-0 border-e border-s-0 h-[170px] flex items-center justify-center p-3'>
            <Link
              href='https://moonbeam.network/'
              className=''
            >
              <Image
                src={MoonBeam}
                width={190}
                height={30}
                alt='MoonBeam Brand'
                className='object-contain'
              />
            </Link>
          </div>
          {/* 7 */}
          <div className='border-[#BBBFCA] border border-t-0 lg:border-e border-e-0 lg:border-s-0 border-s h-[170px] flex items-center justify-center p-3'>
            <Link
              href='https://solana.com/'
              className=''
            >
              <Image
                src={Solana}
                width={205}
                height={40}
                alt='Solana Brand'
                className='object-contain'
              />
            </Link>
          </div>
          {/* 8 */}
          <div className='border-[#BBBFCA] border border-t-0 lg:border-e md:border-e-0 lg:border-s-0 border-s h-[170px] flex items-center justify-center p-3'>
            <Link
              href='https://www.cookie3.com/'
              className=''
            >
              <Image
                src={Cookie}
                width={170}
                height={40}
                alt='Cookie Brand'
                className='object-contain'
              />
            </Link>
          </div>
          {/* 9 */}
          <div className='border-[#BBBFCA] border border-t-0 h-[170px] flex items-center justify-center p-3'>
            <Link
              href='https://www.velvet.capital/'
              className=''
            >
              <Image
                src={VelvetCapital}
                width={210}
                height={45}
                alt='VelvetCapital Brand'
                className='object-contain'
              />
            </Link>
          </div> 
          {/* 10 */}
          <div className='border-[#BBBFCA] border border-t-0 lg:border-e md:border-e-0 lg:border-s-0 md:border-s h-[170px] flex items-center justify-center p-3'>
            <Link
              href='https://xyro.io/'
              className=''
            >
              <Image
                src={Xyro}
                width={195}
                height={35}
                alt='Xyro Brand'
                className='object-contain'
              />
            </Link>
          </div>
          {/* 11 */}
          <div className='border-[#BBBFCA] border border-t-0 lg:border-e border-e-0 lg:border-s-0 border-s h-[170px] flex items-center justify-center p-3'>
            <Link
              href='https://www.tallyup.com/'
              className=''
            >
              <Image
                src={TallyUp}
                width={100}
                height={30}
                alt='TallyUp Brand'
                className='object-contain'
              />
            </Link>
          </div>
          {/* 12 */}
          <div className='border-[#BBBFCA] border border-t-0 border-e lg:border-s-0 border-s h-[170px] flex items-center justify-center p-3'>
            <Link
              href='http://curate.style/'
              className=''
            >
              <Image
                src={Curate}
                width={200}
                height={50}
                alt='Curate Brand'
                className='object-contain'
              />
            </Link>
          </div>
          {/* 13 */}
          <div className='border-[#BBBFCA] border border-t-0 lg:border-b-0 md:border-b border-b-0 h-[170px] flex items-center justify-center p-3'>
            <Link
              href='https://lokal.pk/'
              className=''
            >
              <Image
                src={LOkal}
                width={210}
                height={45}
                alt='Lokal Brand'
                className='object-contain'
              />
            </Link>
          </div>
          {/* 14 */}
          <div className='border-[#BBBFCA] border border-t-0 lg:border-e lg:border-b-0 md:border-e-0 border-s-0 h h-[170px] flex items-center justify-center p-3'>
            <Link
              href='https://kestrl.io/'
              className=''
            >
              <Image
                src={Kestrl}
                width={195}
                height={35}
                alt='Kestrl Brand'
                className='object-contain'
              />
            </Link>
          </div>
          {/* 15 */}
          <div className='border-[#BBBFCA] border md:border-e border-e-0 lg:border-b-0 md:border-b border-b-0 md:border-t-0 border-t lg:border-s-0 border-s h-[170px] flex items-center justify-center p-3'>
            <Link
              href='https://www.zenpulsar.com/'
              className=''
            >
              <Image
                src={Zenpulsar}
                width={155}
                height={38}
                alt='Zenpulsar Brand'
                className='object-contain'
              />
            </Link>
          </div>
          {/* 16 */}
          <div className='border-[#BBBFCA] border border-t-0 border-b-0 border-e lg:border-s-0 border-s h-[170px] flex items-center justify-center p-3'>
            <Link
              href='https://econommi.io/'
              className=''
            >
              <Image
                src={Econnomi}
                width={200}
                height={50}
                alt='Econnomi Brand'
                className='object-contain'
              />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Web3Portfolios