// import Image from 'next/image'

import AboutUs from '@/components/aboutus'
import LandingPageStrom from '@/components/landingpage'
import Promo from '@/components/promo'

export default function Home () {
  return (
    <main className='min-h-screen flex flex-col items-center justify-between divide-y-[0.5px] divide-gray-200'>
      <LandingPageStrom />
      <Promo />
      <AboutUs />
    </main>
  )
}
