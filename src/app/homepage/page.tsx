import React from 'react'

import Image from 'next/image'
import hero from '../../../public/hero.png'
import Brain from '@/components/Icons/Brain'
import Positive from '@/components/Icons/Positive'
import Focus from '@/components/Icons/Focus'
import FiveStars from '@/components/Icons/FiveStars'
import FAQ from '@/components/faq'
import SocialMedia from '@/components/socialMedia'
import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import TrustedBy from '@/components/trusted'

const Home = () => {
  return (
    <>
      <header className='flex flex-col h-screen'>
        <Navigation />
        <Hero />
      </header>

      <main className='flex flex-col gap-y-4 max-sm:gap-y-14 items-center justify-center'>

        <TrustedBy />

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
          <div className='bg-blue-400 w-screen flex flex-col max-lg:flex-col justify-center items-center py-20 text-white'>
            <h2 className='text-3xl max-sm:text-xl max-sm:mx-8 font-bold text-center mb-10'>O QUE EU POSSO TE OFERECER:</h2>
            <div className='grid grid-cols-2 max-md:grid-cols-1 place-items-center  gap-8 mx-80 max-xl:mx-14 max-md:mx-8'>
              <div className='flex flex-col justify-center gap-y-6 bg-blue-300 shadow-default shadow-blue-400 px-8 rounded-lg text-blue-600 max-2xl:h-[220px] max-lg:h-[280px] 2xl:h-[220px]'>
                <div className='flex items-center gap-x-10'>
                  <p>Icon</p>
                  <p className='text-3xl font-bold'>Palestras</p>
                </div>
                <p className='font-medium'>Entenda a importância de palestras sobre saúde mental em sua empresa e o porquê a Bárbara é a profissional ideal.</p>
              </div>
              <div className='flex flex-col justify-center gap-y-6 bg-blue-300 shadow-default shadow-blue-400 px-8 rounded-lg text-blue-600 max-2xl:h-[220px] max-lg:h-[280px] 2xl:h-[220px]'>
                <div className='flex items-center gap-x-10'>
                  <p>Icon</p>
                  <p className='text-3xl font-bold'>Psicoterapia</p>
                </div>
                <p className='font-medium'>Processo terapêutico focado no indivíduo. Tire aqui todas as suas dúvidas sobre a psicóloga Bárbara, sua metodologia e consultório. </p>
              </div>
              <div className='flex flex-col justify-center gap-y-6 bg-blue-300 shadow-default shadow-blue-400 px-8 rounded-lg text-blue-600 max-2xl:h-[220px] max-lg:h-[280px] 2xl:h-[220px]'>
                <div className='flex items-center gap-x-10'>
                  <p>Icon</p>
                  <p className='text-3xl font-bold'>Grupo Terapêutico</p>
                </div>
                <p className='font-medium'>Visa entregar ferramentas práticas para manejar a ansiedade através de videos educativos, uma rede de apoio e ambiente acolhedor. </p>
              </div>
              <div className='flex flex-col justify-center gap-y-6 bg-blue-300 shadow-default shadow-blue-400 px-8 rounded-lg text-blue-600 max-2xl:h-[220px] max-lg:h-[280px] 2xl:h-[220px]'>
                <div className='flex items-center gap-x-10'>
                  <p>Icon</p>
                  <p className='text-3xl font-bold'>Redes Sociais</p>
                </div>
                <p className='font-medium'>Conheça o @psitranquillini, que é a forma de democratizar e disseminar o conhecimento sobre saúde mental, mente e corpo!</p>
              </div>
            </div>
          </div>
        </section>

        <SocialMedia />

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
            <div className='flex flex-col md:mx-10 max-md:mx-5 lg:items-start gap-y-3 xl:me-56 lg:me-16'>
              <h2 className='text-3xl max-sm:mx-8 font-bold lg:text-start '>Ebook Caixa de Ferramentas</h2>
              <p className='text-xl max-sm:mx-8 font-medium'>Baixe agora o ebook caixa de ferramentas e tenha em mãos ferramentas poderosas para ajudar a lidar com a ansiedade a qualquer hora.</p>
              <button className='border-none bg-blue-500 text-white p-4 rounded-md font-medium hover:bg-blue-700'>
                Baixa agora
              </button>
            </div>
          </div>
        </section>

        <FAQ />

        <section>
          <div className='bg-blue-300 w-screen flex max-lg:flex-col justify-center max-lg:text-center items-center py-10 lg:px-40 text-white'>
            <div className='flex flex-col lg:items-start gap-y-3 xl:me-56 lg:me-16 max-lg:mb-10 lg:w-8/12'>
              <h2 className='text-4xl max-sm:mx-8 font-bold max-lg:text-center '>Venha conhecer uma nova, completa e inovadora jornada para sua saúde mental.</h2>
            </div>
            <div className='lg:w-4/12'>
              <button className='border-none bg-blue-500 text-white p-4 rounded-md font-medium hover:bg-blue-700'>
                Entrar em contato
              </button>
            </div>
          </div>
        </section>

        <footer>
          <h2 className='text-3xl max-sm:text-xl max-sm:mx-8 font-bold text-center mb-10'>FOOTER</h2>
        </footer>


      </main>


    </>
  )
}

export default Home