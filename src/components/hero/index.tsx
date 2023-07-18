'use client'

import React from 'react'
import styles from '../../app/homepage/Home.module.css'
import Typewriter from 'typewriter-effect'

const Hero = () => {
  return (
    <section className={`flex h-screen ${styles['bg-image']} justify-center items-center text-white rounded-lg`}>
      <div className='w-screen flex justify-between xl:pe-44 lg:pe-24'>
        <div className='lg:w-7/12'>
        </div>
        <div className='flex flex-col items-start gap-y-6  rounded-md  bg-black bg-opacity-30 max-lg:p-4 max-lg:m-4 lg:w-5/12 lg:p-6'>
          <h1 className='text-4xl font-bold'>Me chamo Bárbara,
            <Typewriter
              options={{
                strings: ['Psicóloga.', 'Criadora de conteúdo.', 'Palestrante.'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <h2 className='text-2xl font-bold'>A ansiedade não precisa definir sua vida!</h2>
          <p className='text-lg font-medium'>Ter liberdade da ansiedade é uma realidade! É possível ter uma vida mais leve aprendendo habilidades simples. Você pode aprender algumas delas agora mesmo!</p>
          <button className='border-none bg-blue-500 text-white p-2 rounded-md font-medium hover:bg-blue-700'>
            Quero aprender como !
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero