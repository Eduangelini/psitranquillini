import React from 'react'
import Image from 'next/image'

import tiktok from '../../../public/tiktok.svg'
import gearseo from '../../../public/gear-seo.svg'
import kwai from '../../../public/kwai.svg'
import sextante from '../../../public/sextante.svg'
import idp from '../../../public/idp.svg'
import zenklub from '../../../public/zenklub.svg'
import lupa from '../../../public/lupa.svg'
import pharminderjr from '../../../public/pharminder-jr.svg'

const TrustedBy = () => {
  return (
    <section>
      <h2 className='text-3xl max-sm:text-xl max-sm:mx-8 my-14 font-bold text-center'>Confiam no meu trabalho:</h2>
      <div className=' grid grid-cols-4 max-sm:grid-cols-2 max-lg:mx-10 gap-x-14 max-sm:gap-y-2 place-items-center'>
        <div className='lg:opacity-50 lg:hover:opacity-100 cursor-pointer'>
          <Image src={tiktok} alt="Logo" width={150} height={75} />
        </div>
        <div className='lg:opacity-50 lg:hover:opacity-100 cursor-pointer'>
          <Image src={zenklub} alt="Logo" width={150} height={75} />
        </div>
        <div className='lg:opacity-50 lg:hover:opacity-100 cursor-pointer'>
          <Image src={kwai} alt="Logo" width={150} height={75} />
        </div>
        <div className='lg:opacity-50 lg:hover:opacity-100 cursor-pointer'>
          <Image src={sextante} alt="Logo" width={150} height={75} />
        </div>
        <div className='lg:opacity-50 lg:hover:opacity-100 cursor-pointer'>
          <Image src={gearseo} alt="Logo" width={150} height={75} />
        </div>
        <div className='lg:opacity-50 lg:hover:opacity-100 cursor-pointer'>
          <Image src={pharminderjr} alt="Logo" width={150} height={75} />
        </div>
        <div className='lg:opacity-50 lg:hover:opacity-100 cursor-pointer'>
          <Image src={idp} alt="Logo" width={150} height={75} />
        </div>
        <div className='lg:opacity-50 lg:hover:opacity-100 cursor-pointer'>
          <Image src={lupa} alt="Logo" width={150} height={75} />
        </div>
      </div>
    </section>
  )
}

export default TrustedBy