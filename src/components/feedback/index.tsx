import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import FiveStars from '../Icons/FiveStars';
import Subtitulo from '../subtitulo';

const Feedback = () => {
  return (
    <section className="lg:w-6/12 w-11/12 lg:my-10 lg:mx-20">
      <Subtitulo text='O QUE MEUS ORIENTADOS ESTÃO DIZENDO:' />
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide className=''>
          <div className='shadow-default rounded-lg p-8 flex flex-col justify-center gap-y-3 mx-2 mb-14 mt-2 max-sm:h-[680px] sm:max-lg:h-[450px] lg:h-[650px] xl:h-[450px]'>
            <FiveStars />
            <p>A apresentação que a Bárbara fez para o nosso evento, ano passado, foi incrível! Eu achei bem interessante como ela conseguiu inovar dentro do tema que era referente a produtividade, trazendo mais sobre a ansiedade, saúde mental e deixando a pauta bem mais humanizada. Só tenho a agradecer por aceitar nosso convite e ter deixado nosso evento ainda mais maravilhoso.</p>
            <p className='font-bold text-blue-700'>Fernanda</p>
            <p>Pharminder Jr</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=''>
          <div className='shadow-default rounded-lg p-8 flex flex-col justify-center gap-y-3 mx-2 mb-14 mt-2 max-sm:h-[680px] sm:max-lg:h-[450px] lg:h-[650px] xl:h-[450px]'>
            <FiveStars />
            <p>Foi ótimo ter uma profissional que tanto admiramos entre nós, contribuindo com todos que participaram sobre um tema muito importante e atual. Apesar de ser um momento de participação optativa, mais de 95% dos funcionários estavam presentes na palestra &quot;Ansiedade e Mindfulness&quot;.
              Escolhemos a Bárbara por todo conteúdo relevante que tem disponibilizado na internet sobre saúde mental, o que foi um grande acerto pois os colaboradores engajaram muito com a ação e deixaram feedbacks muito positivos sobre a psicóloga, o material apresentado, a condução e as práticas ensinadas para o dia-a-dia. Cada dia mais as pessoas evitam empresas com ambiente tóxico, valorizando mais qualidade de vida. Realizar investimentos na saúde mental dos colaboradores é essencial!</p>
            <p className='font-bold text-blue-700'>Stéphanie Baccin</p>
            <p>GEAR SEO</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=''>
          <div className='shadow-default rounded-lg p-8 flex flex-col justify-center gap-y-3 mx-2 mb-14 mt-2 max-sm:h-[680px] sm:max-lg:h-[450px] lg:h-[650px] xl:h-[450px]'>
            <FiveStars />
            <p>Só tenho a agradecer pela ajuda da @Bárbara Tranquillini esses dias foram super especias. Muito obrigada por essa grande iniciativa, acredito que a ansiedade é uma grande vilã na vida de muitas pessoas, porém entender melhor como esse sentimento funciona é algo realmente esclarecedor, além da parte de saber lidar com à ansiedade. Deixo aqui minha gratidão. Você é maravilhosaaaa Bárbara!</p>
            <p className='font-bold text-blue-700'>Agatha</p>
            <p>Grupo Terapêutico</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=''>
          <div className='shadow-default rounded-lg p-8 flex flex-col justify-center gap-y-3 mx-2 mb-14 mt-2 max-sm:h-[680px] sm:max-lg:h-[450px] lg:h-[650px] xl:h-[450px]'>
            <FiveStars />
            <p>Muito obrigada por essa iniciativa, @SeOrientaClínica! Obrigada pela sua paciência e vontade em nos ajudar! Esses dias foram muito especiais e com certeza preciosos para quem sofre de ansiedade no dia a dia. Obrigada!</p>
            <p className='font-bold text-blue-700'>Monique</p>
            <p>Grupo Terapêutico</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=''>
          <div className='shadow-default rounded-lg p-8 flex flex-col justify-center gap-y-3 mx-2 mb-14 mt-2 max-sm:h-[680px] sm:max-lg:h-[450px] lg:h-[650px] xl:h-[450px]'>
            <FiveStars />
            <p>É muito bom começar a ter a consciência de todos os sintomas que ansiedade causa no corpo, estou ficando até menos cansada depois do serviço, quando chego em casa, pq antes parecia que um trator tinha passado por cima de mim, e eu não entendia que isso era por causa da ANSIEDADE que nos deixa tão tenso, tão fadigado, mesmo sem ter trabalhado tanto. Fora que os meus relacionamentos estão mudando real, eu consigo me inserir mais nas conversas, não fico tão preocupada com o que os outros estão pensando de mim (o que me tirava até o sono antes pq ficava ruminando minhas falas e dos outros depois) e to me sentindo mais confortável comigo mesma</p>
            <p className='font-bold text-blue-700'>Sara</p>
            <p>Grupo Terapêutico</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Feedback