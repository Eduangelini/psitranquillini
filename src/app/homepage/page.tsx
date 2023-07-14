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
import FiveStars from '@/components/Icons/FiveStars'

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
          <div className='bg-blue-300 w-screen flex flex-col max-lg:flex-col justify-center max-lg:text-center items-center py-20 text-white'>
            <h2 className='text-3xl max-sm:text-xl max-sm:mx-8 font-bold text-center mb-10'>O QUE EU POSSO TE OFERECER:</h2>
            <div className='grid grid-cols-2 max-md:grid-cols-1 place-items-center text-center gap-8 mx-80 max-xl:mx-14 max-md:mx-8'>
              <div className='flex flex-col justify-center text-center items-center gap-y-6 shadow-lg shadow-blue-400 px-6 py-4 rounded-lg text-blue-600 max-2xl:h-[220px] max-lg:h-[280px] 2xl:h-[220px]'>
                <div className='flex'>
                  <p className='text-3xl font-bold'>Palestras</p>
                </div>
                <p className='font-medium'>Entenda a importância de palestras sobre saúde mental em sua empresa e o porquê a Bárbara é a profissional ideal.</p>
              </div>
              <div className='flex flex-col justify-center text-center items-center gap-y-6 shadow-lg shadow-blue-400 px-6 py-4 rounded-lg text-blue-600 max-2xl:h-[220px] max-lg:h-[280px] 2xl:h-[220px]'>
                <div className='flex'>
                  <p className='text-3xl font-bold'>Psicoterapia</p>
                </div>
                <p className='font-medium'>Processo terapêutico focado no indivíduo. Tire aqui todas as suas dúvidas sobre a psicóloga Bárbara, sua metodologia e consultório. </p>
              </div>
              <div className='flex flex-col justify-center text-center items-center gap-y-6 shadow-lg shadow-blue-400 px-6 py-4 rounded-lg text-blue-600 max-2xl:h-[220px] max-lg:h-[280px] 2xl:h-[220px]'>
                <div className='flex'>
                  <p className='text-3xl font-bold'>Grupo Terapêutico</p>
                </div>
                <p className='font-medium'>Saiba mais sobre o Liberdade da Ansiedade, que visa entregar ferramentas práticas para manejar a ansiedade através de videos educativos, uma rede de apoio e ambiente acolhedor. </p>
              </div>
              <div className='flex flex-col justify-center text-center items-center gap-y-6 shadow-lg shadow-blue-400 px-6 py-4 rounded-lg text-blue-600 max-2xl:h-[220px] max-lg:h-[280px] 2xl:h-[220px]'>
                <div className='flex'>
                  <p className='text-3xl font-bold'>Redes Sociais</p>
                </div>
                <p className='font-medium'>Conheça o @psitranquillini, que é a forma de democratizar e disseminar o conhecimento sobre saúde mental, mente e corpo!</p>
              </div>
            </div>
          </div>
        </section>

        <section className='mb-10'>
          <h2 className='text-3xl max-sm:text-xl max-sm:mx-8 font-bold text-center mb-8'>MINHAS REDES SOCIAIS</h2>
          <div className='flex max-lg:grid max-lg:grid-cols-2 max-lg:mx-10 max-lg:place-items-center max-lg:gap-y-8 max-sm:gap-x-14 gap-x-8 items-center text-center'>
            <div className='flex flex-col items-center gap-y-2 w-[170px] h-[150px] shadow-default px-6 py-4 rounded-lg text-blue-600'>
              <Image src={tiktoklogo} alt="Logo" width={35} />
              <div className='flex'>
                <p className='text-3xl font-bold'>+</p>
                <p className='text-3xl font-bold'>400</p>
                <p className='text-3xl font-bold'>K</p>
              </div>
              <p className='font-medium'>SEGUIDORES</p>
            </div>
            <div className='flex flex-col items-center gap-y-2 w-[170px] h-[150px] shadow-default px-6 py-4 rounded-lg text-blue-600'>
              <Image src={instagram} alt="Logo" width={35} />
              <div className='flex'>
                <p className='text-3xl font-bold'>+</p>
                <p className='text-3xl font-bold'>20</p>
                <p className='text-3xl font-bold'>K</p>
              </div>
              <p className='font-medium'>SEGUIDORES</p>
            </div>
            <div className='flex flex-col items-center gap-y-2 w-[170px] h-[150px] shadow-default px-6 py-4 rounded-lg text-blue-600'>
              <Image src={like} alt="Logo" width={45} />
              <div className='flex'>
                <p className='text-3xl font-bold'>+</p>
                <p className='text-3xl font-bold'>9,3</p>
                <p className='text-3xl font-bold'>M</p>
              </div>
              <p className='font-medium'>CURTIDAS</p>
            </div>
            <div className='flex flex-col items-center gap-y-2 w-[170px] h-[150px] shadow-default px-6 py-4 rounded-lg text-blue-600'>
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

        <section className='my-8'>
          <h2 className='text-3xl max-sm:text-xl max-sm:mx-8 font-bold text-center mb-8'>O QUE MEUS ORIENTADOS DIZEM</h2>
          <div className='flex gap-x-5 max-md:flex-col max-md:mx-5 max-md:gap-y-5'>
            <div className='shadow-default rounded-lg p-4 flex flex-col gap-y-3'>
              <FiveStars />
              <p>A apresentação que a Bárbara fez para o nosso evento, ano passado, foi incrível! Eu achei bem interessante como ela conseguiu inovar dentro do tema que era referente a produtividade, trazendo mais sobre a ansiedade, saúde mental e deixando a pauta bem mais humanizada. Só tenho a agradecer por aceitar nosso convite e ter deixado nosso evento ainda mais maravilhoso.</p>
              <p className='font-bold text-blue-700'>Fernanda</p>
              <p>Pharminder Jr</p>
            </div>
            <div className='shadow-default rounded-lg p-4 flex flex-col gap-y-3'>
              <FiveStars />
              <p>Foi ótimo ter uma profissional que tanto admiramos entre nós, contribuindo com todos que participaram sobre um tema muito importante e atual. Apesar de ser um momento de participação optativa, mais de 95% dos funcionários estavam presentes na palestra &quot;Ansiedade e Mindfulness&quot;.
                Escolhemos a Bárbara por todo conteúdo relevante que tem disponibilizado na internet sobre saúde mental, o que foi um grande acerto pois os colaboradores engajaram muito com a ação e deixaram feedbacks muito positivos sobre a psicóloga, o material apresentado, a condução e as práticas ensinadas para o dia-a-dia. Cada dia mais as pessoas evitam empresas com ambiente tóxico, valorizando mais qualidade de vida. Realizar investimentos na saúde mental dos colaboradores é essencial!</p>
              <p className='font-bold text-blue-700'>Stéphanie Baccin</p>
              <p>GEAR SEO</p>
            </div>
            <div className='shadow-default rounded-lg p-4 flex flex-col gap-y-3'>
              <FiveStars />
              <p>Só tenho a agradecer pela ajuda da @Bárbara Tranquillini esses dias foram super especias. Muito obrigada por essa grande iniciativa, acredito que a ansiedade é uma grande vilã na vida de muitas pessoas, porém entender melhor como esse sentimento funciona é algo realmente esclarecedor, além da parte de saber lidar com à ansiedade. Deixo aqui minha gratidão. Você é maravilhosaaaa Bárbara!</p>
              <p className='font-bold text-blue-700'>Agatha</p>
              <p>Grupo Terapêutico</p>
            </div>
            <div className='shadow-default rounded-lg p-4 flex flex-col gap-y-3'>
              <FiveStars />
              <p>Muito obrigada por essa iniciativa, @SeOrientaClínica! Obrigada pela sua paciência e vontade em nos ajudar! Esses dias foram muito especiais e com certeza preciosos para quem sofre de ansiedade no dia a dia. Obrigada!</p>
              <p className='font-bold text-blue-700'>Monique</p>
              <p>Grupo Terapêutico</p>
            </div>
            <div className='shadow-default rounded-lg p-4 flex flex-col gap-y-3'>
              <FiveStars />
              <p>É muito bom começar a ter a consciência de todos os sintomas que ansiedade causa no corpo, estou ficando até menos cansada depois do serviço, quando chego em casa, pq antes parecia que um trator tinha passado por cima de mim, e eu não entendia que isso era por causa da ANSIEDADE que nos deixa tão tenso, tão fadigado, mesmo sem ter trabalhado tanto. Fora que os meus relacionamentos estão mudando real, eu consigo me inserir mais nas conversas, não fico tão preocupada com o que os outros estão pensando de mim (o que me tirava até o sono antes pq ficava ruminando minhas falas e dos outros depois) e to me sentindo mais confortável comigo mesma</p>
              <p className='font-bold text-blue-700'>Sara</p>
              <p>Grupo Terapêutico</p>
            </div>
          </div>
        </section>

        <section className='flex justify-center mx-5'>
          <div className='bg-blue-300 xl:w-6/12 rounded-xl flex max-lg:flex-col justify-center max-lg:text-center items-center py-10 text-white'>
            <div className='flex flex-col lg:mx-10 max-md:mx-5 lg:items-start gap-y-3 xl:me-56 lg:me-16'>
              <h2 className='text-3xl max-sm:mx-8 font-bold text-start '>Ebook Caixa de Ferramentas</h2>
              <p className='text-xl max-sm:mx-8 font-medium'>Baixe agora o ebook caixa de ferramentas e tenha em mãos ferramentas poderosas para ajudar a lidar com a ansiedade a qualquer hora.</p>
              <button className='border-none bg-blue-500 text-white p-4 rounded-md font-medium hover:bg-blue-700'>
                Baixa agora
              </button>
            </div>
          </div>
        </section>

        <section className='my-8'>
          <h2 className='text-3xl max-sm:text-xl max-sm:mx-8 font-bold text-center mb-8'>FAQ</h2>
        </section>


      </main>


    </>
  )
}

export default Home