import LogoIcon from '@/components/Icons/LogoIcon'
import React from 'react'
import styles from './Home.module.css'

import Image from 'next/image'
import hero from '../../../public/hero.png'
import tiktok from '../../../public/tiktok.svg'
import gearseo from '../../../public/gear-seo.svg'
import kwai from '../../../public/kwai.svg'
import sextante from '../../../public/sextante.svg'
import idp from '../../../public/idp.svg'
import zenklub from '../../../public/zenklub.svg'
import lupa from '../../../public/lupa.svg'
import pharminderjr from '../../../public/pharminder-jr.svg'
import views from '../../../public/views.svg'
import like from '../../../public/like.svg'
import instagram from '../../../public/instagram-logo.svg'
import tiktoklogo from '../../../public/tiktok-logo.svg'
import Brain from '@/components/Icons/Brain'
import Positive from '@/components/Icons/Positive'
import Focus from '@/components/Icons/Focus'

const Home = () => {
  return (
    <>
      <header className='flex flex-col h-screen'>

        <nav className='relative flex justify-around py-6 bg-white'>
          <LogoIcon />
          <div className='flex items-center gap-10 max-md:hidden'>
            <ul className='flex gap-10 cursor-pointer'>
              <li className='hover:text-blue-700 font-medium text-base'>Home</li>
              <li className='hover:text-blue-700 font-medium text-base'>Livros</li>
              <li className='hover:text-blue-700 font-medium text-base'>Blog</li>
            </ul>
            <button className='border-none bg-blue-500 text-white p-2 border-black rounded-md font-medium hover:bg-blue-700'>
              Agendar uma consulta
            </button>
          </div>
        </nav>

        <section className={`flex h-screen ${styles['bg-image']} justify-center items-center text-white rounded-lg`}>
          <div className='w-screen flex justify-between xl:pe-44 lg:pe-24'>
            <div className='lg:w-7/12'>
            </div>
            <div className='flex flex-col items-start gap-y-6  rounded-md  bg-black bg-opacity-30 max-lg:p-4 max-lg:m-4 lg:w-5/12 lg:p-6'>
              <h1 className='text-4xl font-bold'>Me chamo Bárbara, sou <span>PSICÓLOGA.</span></h1>
              <h2 className='text-2xl font-bold'>A ansiedade não precisa definir sua vida!</h2>
              <p className='text-lg font-medium'>Ter liberdade da ansiedade é uma realidade! É possível ter uma vida mais leve aprendendo habilidades simples. Você pode aprender algumas delas agora mesmo!</p>
              <button className='border-none bg-blue-500 text-white p-2 rounded-md font-medium hover:bg-blue-700'>
                Quero aprender como !
              </button>
            </div>
          </div>
        </section>

      </header>

      <main className='flex flex-col gap-y-4 max-sm:gap-y-14 items-center justify-center'>

        <section>
          <h2 className='text-3xl max-sm:text-xl max-sm:mx-8 my-14 font-bold text-center'>EMPRESAS INCRÍVEIS QUE <span className='text-blue-700'>CONFIAM NO MEU TRABALHO:</span></h2>
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

        <section className='lg:my-10 lg:mx-20'>
          <div className='mb-8 flex flex-col gap-y-10 items-center'>
            <h3 className='text-3xl max-sm:text-2xl max-sm:mx-8 font-bold text-center'>MINHAS ABORDAGEMS TERAPÊUTICAS</h3>

            <div className='flex justify-center gap-x-4 max-sm:flex-col max-lg:mx-3'>
              <div className='border-2 border-blue-300 max-sm:m-3 lg:w-3/12 rounded-md'>
                <div className='p-3 flex text-white items-center bg-blue-300 rounded-sm gap-x-5 justify-center'>
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
              <div className='border-2 border-blue-300 max-sm:m-3 lg:w-3/12 rounded-md'>
                <div className='p-3 flex text-white items-center bg-blue-300 rounded-sm gap-x-5 justify-center'>
                  <div className='rounded-full p-5 bg-white'>
                    <Positive />
                  </div>
                  <p className='font-bold'>Psicologia Positiva</p>
                </div>
                <p className='px-5 py-2'>É a teoria e o estudo das emoções positivas e da importância delas na manutenção da saúde. As pesquisas nesse campo nos trazem respostas de como promover saúde mental e bem-estar.</p>
              </div>
              <div className='border-2 border-blue-300 max-sm:m-3 lg:w-3/12 rounded-md'>
                <div className='p-3 flex text-white items-center bg-blue-300 rounded-sm gap-x-5 justify-center'>
                  <div className='rounded-full p-5 bg-white'>
                    <Focus />
                  </div>
                  <p className='font-bold'>Atenção Plena</p>
                </div>
                <p className='px-5 py-2'>A incorporação de ferramentas e conceitos da atenção plena é um dos diferenciais da minha prática clínica e tem trazido resultados muito satisfatórios aos meus clientes por oferecer ferramentas práticas.</p>
              </div>
            </div>
          </div>

          <h2 className='text-3xl max-sm:text-2xl max-sm:mx-8 font-bold text-center mb-8'>UM POUCO SOBRE MIM</h2>
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

        <section className='mb-10'>
          <h2 className='text-3xl max-sm:text-xl max-sm:mx-8 font-bold text-center mb-8'>MINHAS REDES SOCIAIS</h2>
          <div className='flex max-lg:grid max-lg:grid-cols-2 max-lg:mx-10 max-lg:place-items-center max-lg:gap-y-8 max-sm:gap-x-14 gap-x-8 items-center text-center'>
            <div className='flex flex-col items-center gap-y-2 w-[170px] h-[150px] border-2 border-blue-600 px-6 py-4 rounded-md text-blue-600'>
              <Image src={tiktoklogo} alt="Logo" width={35} />
              <div className='flex'>
                <p className='text-3xl font-bold'>+</p>
                <p className='text-3xl font-bold'>400</p>
                <p className='text-3xl font-bold'>K</p>
              </div>
              <p className='font-medium'>SEGUIDORES</p>
            </div>
            <div className='flex flex-col items-center gap-y-2 w-[170px] h-[150px] border-2 border-blue-600 px-6 py-4 rounded-md text-blue-600'>
              <Image src={instagram} alt="Logo" width={35} />
              <div className='flex'>
                <p className='text-3xl font-bold'>+</p>
                <p className='text-3xl font-bold'>20</p>
                <p className='text-3xl font-bold'>K</p>
              </div>
              <p className='font-medium'>SEGUIDORES</p>
            </div>
            <div className='flex flex-col items-center gap-y-2 w-[170px] h-[150px] border-2 border-blue-600 px-6 py-4 rounded-md text-blue-600'>
              <Image src={like} alt="Logo" width={45} />
              <div className='flex'>
                <p className='text-3xl font-bold'>+</p>
                <p className='text-3xl font-bold'>9,3</p>
                <p className='text-3xl font-bold'>M</p>
              </div>
              <p className='font-medium'>CURTIDAS</p>
            </div>
            <div className='flex flex-col items-center gap-y-2 w-[170px] h-[150px] border-2 border-blue-600 px-6 py-4 rounded-md text-blue-600'>
              <Image src={views} alt="Logo" width={55} />
              <div className='flex'>
                <p className='text-3xl font-bold'>+</p>
                <p className='text-3xl font-bold'>1</p>
                <p className='text-3xl font-bold'>B</p>
              </div>
              <p className='font-medium'>VISUALIZAÇÕES</p>
            </div>
          </div>
        </section>

        <section>
          <div className='bg-blue-300 w-screen flex max-lg:flex-col justify-center max-lg:text-center items-center py-40 text-white'>
            <div className='flex flex-col lg:items-start gap-y-3 xl:me-56 lg:me-16 max-lg:mb-20'>
              <h2 className='text-4xl max-sm:mx-8 font-bold text-center '>Entre em contato</h2>
              <p className='text-xl max-sm:mx-8 font-medium'>Para saber mais sobre o meu trabalho, vai ser um prazer ajuda-ló.</p>
            </div>
            <div>
              <button className='border-none bg-blue-500 text-white p-4 rounded-md font-medium hover:bg-blue-700'>
                Entrar em contato
              </button>
            </div>
          </div>
        </section>

        <section>
          <h2 className='text-3xl max-sm:text-xl max-sm:mx-8 font-bold text-center mb-8'>PERGUNTAS FREQUENTES</h2>
        </section>


      </main>


    </>
  )
}

export default Home