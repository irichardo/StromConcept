'use client'
import Image from 'next/image'
import { NavbarList } from './libs/navbarList'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar () {
  const [navbarOn,setNatBar] = useState(false)
  const navbarHandler = () =>{
    setNatBar(!navbarOn)
  }

  const navbarClose = () =>{
    setNatBar(false)
  }
  return (
    <>
      <nav className='w-screen h-[10%] fixed flex bg-[#0b532a] sm:hidden z-20'>
        <div className='w-3/6 h-full text-center flex items-center justify-end'> <Image src='/StromLogo.webp' width={120} height={60} alt='strong de la empresa logo' /></div>
        <div className='w-3/6 h-full flex items-center justify-end'><AiOutlineMenu size={20} color='white' className='m-4' onClick={navbarHandler} /></div>
        <ul className={`w-4/5 absolute right-0 h-screen bg-[#108041] flex flex-col justify-center items-center ${navbarOn?'':'deactivate'} ease-in-out transition-transform animationNavbar`}>
          <button type='button' className='absolute right-0 top-0 m-4 text-2xl text-yellow-300' onClick={navbarClose}> X </button>
          {
            NavbarList.map(a=>{
              return(
                <li key={a} className='w-full h-1/6 flex items-center justify-center text-white'>
                  <button className='w-full h-full' onClick={navbarClose}>
                  {a}
                  </button>
                  </li>
              )
            })
          }
        </ul>

      </nav>
      <nav className='w-screen'>
        {/* DESKTOP  */}
        <div className='w-full h-[10%] bg-[#0F783D] text-white text-sm shadow-sm shadow-green-950 fixed z-20 hidden sm:flex'>
          {/* LOGO */}
          <div className='w-1/5 text-center flex items-center justify-end'> <Image src='/StromLogo.webp' width={120} height={60} alt='strong de la empresa logo' className='m-4' /></div>
          <div className='w-2/5 grid items-center'>
            <ul className='flex justify-stretch h-full'>
              {/* COMPLETE LIST */}
              {NavbarList.map((a) => (
                <li
                  key={a}
                  className='w-1/6 h-full flex justify-center items-center hover:bg-[#0b532a] hover:text-yellow-400 transition-all'
                >
                  <Link href='/' className='w-full h-full flex items-center justify-center cursor-default'>
                    {a}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='w-2/5 flex items-center justify-center'>
            <span className='w-8 h-8 font-thin border-[0.5px] border-white flex items-center justify-center rounded-full'>
              <BsSearch size={15} color='white' />
            </span>
            <span className='m-4 w-1/5 h-[50%] rounded-r-xl rounded-l-xl border-[0.5px] border-white  justify-center items-center flex'>Contactanos</span>
            <span className='m-4 w-2/5 h-[60%] rounded-l-2xl rounded-r-2xl bg-white flex items-center justify-center text-[#0F783D]'>
              Se un distribuidor
            </span>
          </div>
        </div>
      </nav>
    </>
  )
}
