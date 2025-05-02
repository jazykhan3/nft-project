import Footer from '@/app/components/footer/footer'
import Header from '@/app/components/header/header'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BottomleftAngle from '../../../public/assets/images/bottom-left-triangle.png'
import ForwardArrow from '../../../public/assets/images/forward-arrow.png'
import OurMission from '../../../public/assets/images/our-mission.png'


const JoinUs = () => {
  return (
    <>
      <Header />
      {/* Top Banner Section */}
      <div className='max-w-[1440px] mx-auto lg:px-9 md:px-6 sm:px-4 px-2.5'>
        <h1 className='border-s border-e border-b border-[#BBBFCA] uppercase text-white text-center lg:text-[62px] md:text-[50px] sm:text-[36px] text-[26px] font-normal m-0 lg:px-6 md:px-4 sm:px-3 px-2 lg:py-8 md:py-7 py-6' >
          From Vision to Market Success
        </h1>
        <div className='border-s border-e border-b border-[#BBBFCA]'>
          <div className='grid lg:grid-cols-[20%_40%_40%] sm:grid-cols-[50%_50%] grid-cols-[100%] gap-0'>
            <div className='lg:hidden block border-b sm:border-e border-e-0  border-[#BBBFCA]'>
              <Image
                height={252}
                width={290}
                src={OurMission}
                alt="OurMission"
                className="object-contain w-full max-h-[252px]"
              />
            </div>
            <div className='lg:px-10 md:px-7 sm:px-5 px-3 lg:py-7 sm:py-6 py-5 border-b border-[#BBBFCA]'>
              <h2 className='text-[#F4F4F2] font-medium text-[16px] mb-4 uppercase'>
                Our Mission
              </h2>
              <p className='text-[#F4F4F2] font-light text-sm m-0'>
                We’re driven by a shared goal – to help others succeed in the digital asset space.
              </p>
            </div>
            <div className='lg:px-10 md:px-7 sm:px-5 px-3 lg:py-7 sm:py-6 py-5 border border-t-0 md:border-s border-s-0 sm:border-e border-e-0 border-[#BBBFCA]'>
              <h2 className='text-[#F4F4F2] font-medium text-[16px] flex items-center gap-2 mb-4 uppercase'>
                <Image
                  src={BottomleftAngle}
                  width={12}
                  height={12}
                  alt='BottomLeftTriangle'
                  className='w-3 h-3 object-contain '
                />
                <span>The Pursuit of Excellence</span>
              </h2>
              <ul className='list-disc ml-5'>
                <li className='text-[#F4F4F2] font-light text-sm m-0'>
                  We set ambitious goals and pursue them passionately
                </li>
                <li className='text-[#F4F4F2] font-light text-sm m-0'>
                  Excellence is our foundation for success
                </li>
                <li className='text-[#F4F4F2] font-light text-sm m-0'>
                  Integrity guides every decision and step we take
                </li>
              </ul>
            </div>
            <div className='lg:px-10 md:px-7 sm:px-5 px-3 lg:py-7 sm:py-6 py-5 border-b border-[#BBBFCA]'>
              <h2 className='text-[#F4F4F2] font-medium text-[16px] flex items-center gap-2 mb-4 uppercase'>
                <Image
                  src={BottomleftAngle}
                  width={12}
                  height={12}
                  alt='BottomLeftTriangle'
                  className='w-3 h-3 object-contain '
                />
                <span>Built-In Collaboration</span>
              </h2>
              <ul className='list-disc ml-5'>
                <li className='text-[#F4F4F2] font-light text-sm m-0'>
                  We go the extra mile to support our partners and stakeholders
                </li>
                <li className='text-[#F4F4F2] font-light text-sm m-0'>
                  Our team works together closely to achieve shared goals
                </li>
                <li className='text-[#F4F4F2] font-light text-sm m-0'>
                  Unity gives strengthens our values and common purpose
                </li>
              </ul>
            </div>
            <div className='lg:block hidden'>
              <Image
                height={252}
                width={290}
                src={OurMission}
                alt="OurMission"
                className="object-contain w-full h-full"
              />
            </div>
            <div className='lg:px-10 md:px-7 sm:px-5 px-3 lg:py-7 sm:py-6 py-5 border border-t-0 md:border-b-0 border-b md:border-s border-s-0 sm:border-e border-e-0 border-[#BBBFCA]'>
              <h2 className='text-[#F4F4F2] font-medium text-[16px] flex items-center gap-2 mb-4 uppercase'>
                <Image
                  src={BottomleftAngle}
                  width={12}
                  height={12}
                  alt='BottomLeftTriangle'
                  className='w-3 h-3 object-contain '
                />
                <span>Embodying The Entrepreneurial Spirit</span>
              </h2>
              <ul className='list-disc ml-5'>
                <li className='text-[#F4F4F2] font-light text-sm m-0'>
                  Innovation is in our DNA – we thrive on creative problem solving
                </li>
                <li className='text-[#F4F4F2] font-light text-sm m-0'>
                  We move fast, act decisively, and stay results-focused
                </li>
                <li className='text-[#F4F4F2] font-light text-sm m-0'>
                  Every team member is empowered to take ownership and lead
                </li>
              </ul>
            </div>
            <div className='lg:px-10 md:px-7 sm:px-5 px-3 lg:py-7 sm:py-6 py-5 border-0 border-[#BBBFCA]'>
              <h2 className='text-[#F4F4F2] font-medium text-[16px] flex items-center gap-2 mb-4 uppercase'>
                <Image
                  src={BottomleftAngle}
                  width={12}
                  height={12}
                  alt='BottomLeftTriangle'
                  className='w-3 h-3 object-contain '
                />
                <span>Performance-Driven</span>
              </h2>
              <ul className='list-disc ml-5'>
                <li className='text-[#F4F4F2] font-light text-sm m-0'>
                  We communicate in a transparent and direct way
                </li>
                <li className='text-[#F4F4F2] font-light text-sm m-0'>
                  Our non-hierarchical structure means all contributions are valued
                </li>
                <li className='text-[#F4F4F2] font-light text-sm m-0'>
                  Titles don’t matter – results do and we reward strong performance
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
      {/* Our Edge  */}
      <div className="max-w-[1440px] mx-auto lg:px-9 md:px-6 sm:px-4 px-2.5 ">
        <div className=' border-e border-s border-[#BBBFCA]'>
          <h1 className='text-white lg:text-[40px] md:text-4xl sm:text-3xl text-[26px] font-medium m-0 lg:px-6 md:px-4 sm:px-3 px-2 lg:pt-12 md:pt-10 pt-9 lg:pb-7 md:pb-5 sm:pb-4 pb-3' >
            Partner with Us For Continuous Growth
          </h1>
          <div className='flex gap-0 flex-col md:flex-row border-t border-[#BBBFCA]'>
            <p className='lg:w-[45%] md:w-[60%] w-full text-[#F4F4F2] font-light text-sm m-0 lg:px-6 md:px-4 sm:px-3 px-2 lg:py-12 md:py-8 py-6 md:border-e border-e-0 border-[#BBBFCA]'>
              At Aweh Ventures, we’ve built the perfect conditions for success – an adaptable team of top performers who collaborate and continuously grow together. Every member of the team is aligned on meeting shared goals and driving success for our partners.
              <br /><br />
              For us, success isn’t just a mindset. It isn’t just a goal. It’s a way of life. Join us today.
            </p>
            <div className='lg:w-[55%] md:w-[40%] w-full flex items-end'>
              <Link
                href='https://tally.so/r/np51G1'
                className='text-white font-medium text-sm flex gap-2.5 p-4 w-full bg-[#336DFF] justify-center items-center hover:bg-[#336DFF]/80 h-fit'
              >
                Join Us
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

      </div>
      <Footer />
    </>
  )
}
export default JoinUs
