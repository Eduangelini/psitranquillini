import React from 'react'
import Image from 'next/image'

import palestra from '../../../public/palestras.svg'
import psicoterapia from '../../../public/psicoterapia.svg'
import grupo from '../../../public/grupo.svg'
import redessociais from '../../../public/redes-sociais.svg'
import Subtitulo from '../subtitulo'

const WorkSolutions = () => {
  return (
    <section className='lg:my-10 lg:mx-20'>
      <div className='bg-white w-screen flex flex-col max-lg:flex-col justify-center items-center py-20 text-black'>
        <Subtitulo text='O que eu posso te oferecer:' />
        <div className='grid grid-cols-2 max-md:grid-cols-1 place-items-center  gap-8 mx-80 max-xl:mx-14 max-md:mx-8'>
          <div className='flex flex-col justify-center gap-y-6 bg-blue-300 shadow-default shadow-blue-400 px-8 rounded-lg text-white max-2xl:h-[220px] max-lg:h-[280px] 2xl:h-[220px]'>
            <div className='flex items-center gap-x-10'>
              <Image src={palestra} alt="Logo" width={60} />
              <p className='text-3xl text-blue-600 font-bold'>Palestras</p>
            </div>
            <p className='font-medium'>Entenda a importância de palestras sobre saúde mental em sua empresa e o porquê a Bárbara é a profissional ideal.</p>
          </div>
          <div className='flex flex-col justify-center gap-y-6 bg-blue-300 shadow-default shadow-blue-400 px-8 rounded-lg text-white max-2xl:h-[220px] max-lg:h-[280px] 2xl:h-[220px]'>
            <div className='flex items-center gap-x-10'>
              <Image src={psicoterapia} alt="Logo" width={60} />
              <p className='text-3xl text-blue-600 font-bold'>Psicoterapia</p>
            </div>
            <p className='font-medium'>Processo terapêutico focado no indivíduo. Tire aqui todas as suas dúvidas sobre a psicóloga Bárbara, sua metodologia e consultório. </p>
          </div>
          <div className='flex flex-col justify-center gap-y-6 bg-blue-300 shadow-default shadow-blue-400 px-8 rounded-lg text-white max-2xl:h-[220px] max-lg:h-[280px] 2xl:h-[220px]'>
            <div className='flex items-center gap-x-10'>
              <Image src={grupo} alt="Logo" width={60} />
              <p className='text-3xl text-blue-600 font-bold'>Grupo Terapêutico</p>
            </div>
            <p className='font-medium'>Visa entregar ferramentas práticas para manejar a ansiedade através de videos educativos, uma rede de apoio e ambiente acolhedor. </p>
          </div>
          <div className='flex flex-col justify-center gap-y-6 bg-blue-300 shadow-default shadow-blue-400 px-8 rounded-lg text-white max-2xl:h-[220px] max-lg:h-[280px] 2xl:h-[220px]'>
            <div className='flex items-center gap-x-10'>
              <Image src={redessociais} alt="Logo" width={60} />
              <p className='text-3xl text-blue-600 font-bold'>Redes Sociais</p>
            </div>
            <p className='font-medium'>Conheça o @psitranquillini, que é a forma de democratizar e disseminar o conhecimento sobre saúde mental, mente e corpo!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkSolutions