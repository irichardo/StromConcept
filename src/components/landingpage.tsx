import Image from 'next/image'
import { IoIosArrowDown } from 'react-icons/io'

export default function LandingPageStrom () {
  return (
    <section className='w-full h-screen flex'>
      {/* Mobile */}
      <div className='w-full h-full flex flex-col sm:hidden'>
        <div className='w-full h-2/6 flex flex-col items-end justify-end text-center'>
          <span className='w-full h-1/4 flex items-end justify-center text-2xl'><span className='font-bold'>Luminarias LED</span>&nbsp;de</span>
          <span className='w-full h-1/4 text-lg'>alta eficiencia</span>
        </div>
        <div className='w-full h-3/6'><Image src='/stromLandingPage.webp' width={600} height={600} alt='Reflectores y luminarios' /></div>
        <div className='w-full h-1/5 flex items-center justify-center'>
          <IoIosArrowDown size={50} color='#0b532a' className='animate-bounce' />
        </div>
      </div>
      {/* Desktop */}
      <div className='w-full h-full hidden sm:flex'>
        <div className='w-1/2 h-full flex items-center justify-end '>
          {/* lightbulb image  */}
          <Image src='/stromLandingPage.webp' width={600} height={600} alt='Reflectores y luminarios' />
        </div>
        <div className='w-1/2 h-full flex items-center justify-center text-5xl font-light'>
          <p className='w-[90%]'>
            La <span className='font-bold'>eficiencia</span> es lo <br /> mas importante
          </p>
        </div>
      </div>
    </section>
  )
}
