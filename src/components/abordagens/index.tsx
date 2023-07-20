import React from 'react'
import Brain from '../Icons/Brain'
import Focus from '../Icons/Focus'
import Positive from '../Icons/Positive'
import Subtitulo from '../subtitulo'

const Abordagens = () => {
  return (
    <section className='lg:my-10 lg:mx-20'>
      <div className='mb-8 flex flex-col items-center'>
        <Subtitulo text='MINHAS ABORDAGEMS TERAPÊUTICAS' />
        <div className='flex justify-center gap-x-8 max-sm:flex-col max-lg:mx-3'>
          <div className='max-sm:m-3 lg:w-3/12 shadow-default rounded-lg'>
            <div className='p-3 flex text-white items-center bg-blue-300 rounded-t-lg gap-x-5 justify-center'>
              <div className='rounded-full p-5 bg-white'>
                <Brain />
              </div>
              <div>
                <p className='font-bold'>Terapia cognitiva</p>
                <p className='font-bold'>comportamental</p>
              </div>
            </div>
            <p className='px-5 py-2'>É a teoria principal que guia minha visão de homem e relação com o ambiente.</p>
          </div>
          <div className='max-sm:m-3 lg:w-3/12 shadow-default rounded-lg'>
            <div className='p-3 flex text-white items-center bg-blue-300 rounded-t-lg gap-x-5 justify-center'>
              <div className='rounded-full p-5 bg-white'>
                <Positive />
              </div>
              <p className='font-bold'>Psicologia Positiva</p>
            </div>
            <p className='px-5 py-2'>É a teoria e o estudo das emoções positivas e da importância delas na manutenção da saúde. As pesquisas nesse campo nos trazem respostas de como promover saúde mental e bem-estar.</p>
          </div>
          <div className='max-sm:m-3 lg:w-3/12 shadow-default rounded-lg'>
            <div className='p-3 flex text-white items-center bg-blue-300 rounded-t-lg gap-x-5 justify-center'>
              <div className='rounded-full p-5 bg-white'>
                <Focus />
              </div>
              <p className='font-bold'>Atenção Plena</p>
            </div>
            <p className='px-5 py-2'>A incorporação de ferramentas e conceitos da atenção plena é um dos diferenciais da minha prática clínica e tem trazido resultados muito satisfatórios aos meus clientes por oferecer ferramentas práticas.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Abordagens