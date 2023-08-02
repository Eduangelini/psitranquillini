'use client'

import React from 'react'
import Image from 'next/image'
import views from '../../../public/views.svg'
import like from '../../../public/like.svg'
import instagram from '../../../public/instagram-logo.svg'
import tiktoklogo from '../../../public/tiktok-logo.svg'
import CountUp from 'react-countup'
import Subtitulo from '../subtitulo'
import VisibilitySensor from 'react-visibility-sensor'

const SocialMedia = () => {

  return (
    <VisibilitySensor>
      {({ isVisible }) => (
        isVisible ? (
          <section className='mb-10'>
            <Subtitulo text='Minhas redes sociais' />
            <div className='flex max-lg:grid max-lg:grid-cols-2 max-lg:mx-10 max-lg:place-items-center max-lg:gap-y-8 max-sm:gap-x-14 gap-x-8 items-center text-center'>
              <div className='flex flex-col items-center gap-y-2 w-[170px] h-[150px] shadow-default px-6 py-4 rounded-lg text-blue-600'>
                <Image src={tiktoklogo} alt="Logo" width={35} />
                <span className='flex'>
                  <span className='text-3xl font-bold'>+</span>
                  <span className='text-3xl font-bold'><CountUp start={0} end={439} duration={3} /></span>
                  <span className='text-3xl font-bold'>K</span>
                </span>
                <p className='font-medium'>SEGUIDORES</p>
              </div>
              <div className='flex flex-col items-center gap-y-2 w-[170px] h-[150px] shadow-default px-6 py-4 rounded-lg text-blue-600'>
                <Image src={instagram} alt="Logo" width={35} />
                <div className='flex'>
                  <span className='text-3xl font-bold'>+</span>
                  <span className='text-3xl font-bold'><CountUp start={0} end={22} duration={3} /></span>
                  <span className='text-3xl font-bold'>K</span>
                </div>
                <p className='font-medium'>SEGUIDORES</p>
              </div>
              <div className='flex flex-col items-center gap-y-2 w-[170px] h-[150px] shadow-default px-6 py-4 rounded-lg text-blue-600'>
                <Image src={like} alt="Logo" width={45} />
                <div className='flex'>
                  <span className='text-3xl font-bold'>+</span>
                  <span className='text-3xl font-bold'><CountUp start={0} end={9} duration={3} /></span>
                  <span className='text-3xl font-bold'>M</span>
                </div>
                <p className='font-medium'>CURTIDAS</p>
              </div>
              <div className='flex flex-col items-center gap-y-2 w-[170px] h-[150px] shadow-default px-6 py-4 rounded-lg text-blue-600'>
                <Image src={views} alt="Logo" width={55} />
                <div className='flex'>
                  <span className='text-3xl font-bold'>+</span>
                  <span className='text-3xl font-bold'><CountUp start={0} end={727} duration={3} /></span>
                  <span className='text-3xl font-bold'>M</span>
                </div>
                <p className='font-medium'>VISUALIZAÇÕES</p>
              </div>
            </div>
          </section>)
          :
          <div className='mb-10'>
            <Subtitulo text='Minhas redes sociais' />
            <div className='flex max-lg:grid max-lg:grid-cols-2 max-lg:mx-10 max-lg:place-items-center max-lg:gap-y-8 max-sm:gap-x-14 gap-x-8 items-center text-center'>
              <div className='flex flex-col items-center gap-y-2 w-[170px] h-[150px] shadow-default px-6 py-4 rounded-lg text-blue-600'>
                <Image src={tiktoklogo} alt="Logo" width={35} />
                <span className='flex'>
                  <span className='text-3xl font-bold'>+</span>
                  <span className='text-3xl font-bold'><CountUp start={0} end={439} duration={3} /></span>
                  <span className='text-3xl font-bold'>K</span>
                </span>
                <p className='font-medium'>SEGUIDORES</p>
              </div>
              <div className='flex flex-col items-center gap-y-2 w-[170px] h-[150px] shadow-default px-6 py-4 rounded-lg text-blue-600'>
                <Image src={instagram} alt="Logo" width={35} />
                <div className='flex'>
                  <span className='text-3xl font-bold'>+</span>
                  <span className='text-3xl font-bold'><CountUp start={0} end={22} duration={3} /></span>
                  <span className='text-3xl font-bold'>K</span>
                </div>
                <p className='font-medium'>SEGUIDORES</p>
              </div>
              <div className='flex flex-col items-center gap-y-2 w-[170px] h-[150px] shadow-default px-6 py-4 rounded-lg text-blue-600'>
                <Image src={like} alt="Logo" width={45} />
                <div className='flex'>
                  <span className='text-3xl font-bold'>+</span>
                  <span className='text-3xl font-bold'><CountUp start={0} end={9} duration={3} /></span>
                  <span className='text-3xl font-bold'>M</span>
                </div>
                <p className='font-medium'>CURTIDAS</p>
              </div>
              <div className='flex flex-col items-center gap-y-2 w-[170px] h-[150px] shadow-default px-6 py-4 rounded-lg text-blue-600'>
                <Image src={views} alt="Logo" width={55} />
                <div className='flex'>
                  <span className='text-3xl font-bold'>+</span>
                  <span className='text-3xl font-bold'><CountUp start={0} end={727} duration={3} /></span>
                  <span className='text-3xl font-bold'>M</span>
                </div>
                <p className='font-medium'>VISUALIZAÇÕES</p>
              </div>
            </div>
          </div>
      )}
    </VisibilitySensor>
  )
}

export default SocialMedia