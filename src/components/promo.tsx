'use client'
import PromoComp from './utils/promocomp'
import React, { useState } from 'react'
import { CgPerformance } from 'react-icons/Cg'
import { BiSolidTimeFive } from 'react-icons/bi'
import { MdOutlineSavings, MdEnergySavingsLeaf } from 'react-icons/md'
import { BsTools, BsLightbulb, BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'

/* ImageSettings para acomodar rapidamente tanto el tamaño como el color, color puede recibir # */
const imageSettings = {
  size: 80,
  color: 'green'
}
/* Todos los elementos utilizados en la generacion mapeada de Las cards */
const data = [{ id: 17, characteristic: 'mayor eficiencia energetica', image: <CgPerformance size={imageSettings.size} color={imageSettings.color} /> },
  { id: 15, characteristic: 'Mayor vida util', image: <BiSolidTimeFive size={imageSettings.size} color={imageSettings.color} /> },
  { id: 1, characteristic: 'Mayor ahorro energetico', image: <MdOutlineSavings size={imageSettings.size} color={imageSettings.color} /> },
  { id: 2, characteristic: 'Cero mantenimiento', image: <BsTools size={imageSettings.size} color={imageSettings.color} /> },
  { id: 3, characteristic: 'Iluminacion uniforme', image: <BsLightbulb size={imageSettings.size} color={imageSettings.color} /> },
  { id: 4, characteristic: 'Productos ecologicos', image: <MdEnergySavingsLeaf size={imageSettings.size} color={imageSettings.color} /> }]

export default function Promo () {
  const [actualCard, SetCard] = useState(0)

  const handlerCarousel = (props:any) => {
    if (props.target.value === 'more' && actualCard < data.length - 1) {
      SetCard(actualCard + 1)
    }
    if (props.target.value === 'less' && actualCard > 0) {
      SetCard(actualCard - 1)
    }
  }
  return (
    <>
      <section className='w-full h-[60vh]'>
        <div className='w-full h-full sm:hidden'>
          <div className='w-full h-1/3 text-center text-lg flex items-center'>
            <div className='w-full min-h-min'>
              Brindamos&nbsp;<span className='font-bold'>productos</span>&nbsp;de iluminacion de alta calidad
            </div>
          </div>
          <div className='w-full h-2/3 items-center justify-around flex'>
            <button value='less' onClick={handlerCarousel}>
              <BsFillArrowLeftCircleFill size={30} color='#0F783D' className='pointer-events-none' />
            </button>
            {
              data.map((a:any) => {
                return <React.Fragment key={a.id}><PromoComp image={a.image} characteristic={a.characteristic} /></React.Fragment>
              })[actualCard]
            }
            <button value='more' onClick={handlerCarousel}>
              <BsFillArrowRightCircleFill size={30} color='#0F783D' className='pointer-events-none' />
            </button>
          </div>
        </div>
        {/* MOBILE */}
        <div className='w-full h-full hidden sm:block'>
          <div className='w-full h-3/6 text-center flex flex-col items-center justify-center text-4xl font-semibold'>
            <span className='flex items-center justify-center'> Brindamos &nbsp;<span className='font-bold'>productos</span>&nbsp; de</span>
            <span className='flex items-center justify-center tracking-wide'>
              iluminacion de alta calidad
            </span>
          </div>
          <div className='w-full h-3/6 flex justify-center'>
            <div className='w-[80%] h-2/3 flex relative justify-around'>
              {
              data.map(a =>
                <React.Fragment key={a.id}>
                  <PromoComp image={a.image} characteristic={a.characteristic} />
                </React.Fragment>)
          }
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
