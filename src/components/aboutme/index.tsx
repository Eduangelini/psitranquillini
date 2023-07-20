import Image from 'next/image'
import React from 'react'
import hero from '../../../public/hero.png'
import Subtitulo from '../subtitulo'

const AboutMe = () => {
  return (
    <section className='lg:my-10 lg:mx-20'>
      <Subtitulo text='UM POUCO SOBRE MIM' />
      <div className='flex items-center justify-center gap-x-10'>
        <div className='lg:w-6/12 max-lg:hidden'>
          <Image src={hero} alt="Logo" className='rounded-lg' />
        </div>
        <div className=' flex flex-col gap-y-6 lg:w-6/12 p-3 indent-5 max-lg:mx-6'>
          <p>
            Sou psicóloga, educadora e divulgadora científica com uma clínica 100% online para maiores de 18 anos. Também sou criadora e dona do @seorientaonline.
          </p>
          <p>
            Estou em uma jornada longa e constante dentro dos estudos sobre atenção plena, que, atualmente, tem se mostrado um dos melhores tratamentos da ansiedade e outros transtornos psicológicos.
          </p>
          <p>
            Sou uma ávida estudante do comportamento humano e estou constantemente buscando novas maneiras de me capacitar através de cursos e leituras sobre temas que meus clientes trazem nas sessões. Considero-me uma eterna aprendiz e tenho muita alegria em fazer o que eu faço.
          </p>
          <p className='font-bold'>
            Meu principal propósito é ensinar às pessoas que ter liberdade da ansiedade é possível e que o caminho pode ser menos sofrido do que elas imaginam!
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe