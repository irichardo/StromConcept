import Image from 'next/image'
import { AiOutlineArrowRight } from 'react-icons/ai'

export default function AboutUs () {
  return (
    <>
      <section className='w-full h-[90vh] flex-col bg-[#E5F2E9] sm:flex hidden'>
        <div className='w-full h-1/5 text-center items-end flex'>
          <div className='w-full h-4/6 flex flex-col'>
            <span className='w-full h-1/2 text-4xl text-center flex items-center justify-center font-bold'>
              Luminarias LED&nbsp;<span className='font-normal'>de alta</span>&nbsp;eficiencia
            </span>
            <span className='w-full h-1/2 text-center flex items-center justify-center font-semibold'>
              Ofrecemos productos de iluminacion LED de alta calidad
            </span>
          </div>
        </div>
        <div className='w-full h-4/5 flex '>
          <div className='w-1/2 h-full flex items-end justify-end'>
            <Image src='/AboutUs.png' width={450} height={700} alt='Imagen referente de contacto' />
          </div>
          <div className='w-2/3 h-full flex flex-col items-center justify-center'>
            <p className='w-2/3 h-2/3 text-lg flex items-end'>
              Fabricamos y distribuimos productos de iluminación LED de alta calidad. Nuestro compromiso con la eficiencia energética, innovación y excelencia nos convierten en una opción confiable y rentable para empresas y distribuidores e todo el Perú.
            </p>
            <div className='w-2/3 h-1/3 flex items-center'>
              <button className='w-1/4 h-12 border-2 border-[#0F783D] rounded-r-3xl rounded-l-3xl text-[#0F783D] font-bold flex items-center justify-center hover:bg-green-800 hover:text-white transition-all'>
                conócenos <AiOutlineArrowRight className='ml-2' />
              </button>
            </div>
          </div>
        </div>
        {/* <div className='w-full h-4/5 bg-amber-300' /> */}
      </section>
    </>
  )
}
