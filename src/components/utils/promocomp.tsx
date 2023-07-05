import { promo } from '../libs/types'

export default function PromoComp ({ characteristic, image }:promo) {
  return (
    <div className='h-full w-1/2 sm:min-w-[15%] rounded-2xl shadow-lg shadow-[#b3e7ca] hover:shadow-none transition-all delay-100' key={characteristic}>
      <div className='h-3/5 flex items-center justify-center'>
        {
            image
        }
      </div>
      <div className='text-sm font-light w-full items-center justify-center flex'>
        <span className='w-4/5 text-center'>
          {
       characteristic
        }
        </span>
      </div>
    </div>
  )
}
