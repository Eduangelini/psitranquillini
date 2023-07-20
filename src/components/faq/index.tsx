import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
  return (
    <section className='py-8 px-6 flex flex-col gap-y-2 lg:w-6/12'>
      <h2 className='text-3xl max-sm:text-xl max-sm:mx-8 font-bold text-center mb-10 text-blue-500'>Perguntas Frequentes</h2>
      <Accordion className='bg-blue-200 rounded-md shadow-none'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className='font-bold text-lg py-2 hover:text-blue-500 '>Como marcar uma consulta?</Typography>
        </AccordionSummary>
        <AccordionDetails className='bg-white shadow-none'>
          <Typography className='bg-white shadow-none py-4 text-lg'>
            É só clicar nesse link que você será redirecionado para o What&apos;s App da minha assistente, Velma.
            Ela vai lhe passar todas as informações sobre o funcionamento das sessões, valores, formas de pagamento, disponibilidade de horário e qualquer outra dúvida que você tiver.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className='bg-blue-200 rounded-md shadow-none'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className='font-bold text-lg py-2 hover:text-blue-500 '>Seráqeue você pode realmente me ajudar?</Typography>
        </AccordionSummary>
        <AccordionDetails className='bg-white shadow-none'>
          <Typography className='bg-white shadow-none py-4 text-lg'>
            Além da minha experiência e formação, eu estou constantemente estudando novas alternativas e reflexões que possam contribuir para meu trabalho e quaisquer desafios que se apresentem em casos específicos. Acredito no poder do vínculo terapêutico para gerar mudanças mas também creio que sou apenas uma facilitadora no processo de cura e desenvolvimento pessoal. É exatamente por isso que uso o termo &quot;cliente&quot; ao invés de paciente. Na relação clínica não existe uma hierarquia de poder e você não receberá um tratamento de maneira passiva. Costumo dizer que a verdadeira terapia começa apenas quando a sessão termina.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className='bg-blue-200 rounded-md shadow-none'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className='font-bold text-lg py-2 hover:text-blue-500 '>Quanto tempo dura uma sessão?</Typography>
        </AccordionSummary>
        <AccordionDetails className='bg-white shadow-none'>
          <Typography className='bg-white shadow-none py-4 text-lg'>
            As sessões tem duração de 50 minutos e acontecem, via de regra, uma vez por semana.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className='bg-blue-200 rounded-md shadow-none'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className='font-bold text-lg py-2 hover:text-blue-500 '>Você atende presencial?</Typography>
        </AccordionSummary>
        <AccordionDetails className='bg-white shadow-none'>
          <Typography className='bg-white shadow-none py-4 text-lg'>
            Não! Atendo 100% online com muita alegria e sem intenções no momento de abrir um espaço físico.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className='bg-blue-200 rounded-md shadow-none'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className='font-bold text-lg py-2 hover:text-blue-500 '>Como funcionam as sessões online?</Typography>
        </AccordionSummary>
        <AccordionDetails className='bg-white shadow-none'>
          <Typography className='bg-white shadow-none py-4 text-lg'>
            Fazer sessões online é tudo de bom, e não sou apenas eu que pensa isso. Meus clientes amam fazer as sessões pelo digital pois estão no conforto de suas casas, evitam trânsito, gastos de tempo e dinheiro com a locomoção, e o melhor de tudo, você pode me encontrar de qualquer lugar do mundo! Eu atendo clientes em Portugal, Austrália, Irlanda e de todas as partes do Brasil. Tudo o que você precisa é de uma internet de boa qualidade, um espaço silencioso e pronto! Podemos fazer nossos encontros através de diversas plataformas de ligação de video tais como: zoom, whatsapp video, facetime, meet, e skype.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className='bg-blue-200 rounded-md shadow-none'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className='font-bold text-lg py-2 hover:text-blue-500 '>Quanto tempo demora para a sessão fazer efeito?</Typography>
        </AccordionSummary>
        <AccordionDetails className='bg-white shadow-none'>
          <Typography className='bg-white shadow-none py-4 text-lg'>
            Desde a primeira sessão é possível ver melhoras e mudanças no humor dos clientes. É importante frisar que a terapia é sim um processo que pode, ou não, ser linear e que cada pessoa tem uma experiência única.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className='bg-blue-200 rounded-md shadow-none'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className='font-bold text-lg py-2 hover:text-blue-500 '>Terapia é para sempre?</Typography>
        </AccordionSummary>
        <AccordionDetails className='bg-white shadow-none'>
          <Typography className='bg-white shadow-none py-4 text-lg'>
            Não necessariamente. Muita gente acredita que terapia é um processo sem fim, mas isso não é verdade para a maioria dos casos. Eu procuro oferecer aos meus clientes claras definições das demandas e objetivos principais do nosso trabalho e, quando elas passam a ser solucionadas, pode partir de ambas as partes (da psicóloga ou do cliente) a vontade de iniciar o processo de alta.

            Meu maior desejo é que você se sinta preparado e instrumentalizado para não precisar mais dos meus serviços!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className='bg-blue-200 rounded-md shadow-none'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className='font-bold text-lg py-2 hover:text-blue-500 '>Quando vou saber que posso receber alta?</Typography>
        </AccordionSummary>
        <AccordionDetails className='bg-white shadow-none'>
          <Typography className='bg-white shadow-none py-4 text-lg'>
            Idealmente a alta ocorre quando o cliente consegue aprender habilidades novas para solucionar problemas específicos. Além disso, eu levo em consideração a habilidade do cliente em usar sua autoconsciência e autocrítica para lidar de forma, cada vez mais autônoma, com suas adversidades.

            O meu trabalho é, principalmente, te empoderar para que você se sinta confiante em tomar decisões baseadas na SUA maneira de ver o mundo. A alta é um processo dialogado nas sessões e varia muito em tempo e formato, de pessoa para pessoa.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className='bg-blue-200 rounded-md shadow-none'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className='font-bold text-lg py-2 hover:text-blue-500 '>Quanto é uma sessão?</Typography>
        </AccordionSummary>
        <AccordionDetails className='bg-white shadow-none'>
          <Typography className='bg-white shadow-none py-4 text-lg'>
            Devido a regras do meu Conselho de Psicologia, eu não posso disponibilizar de maneira pública essa informação mas nesse link a Velma poderá tirar todas as suas dúvidas. De antemão, deixo claro que a psicoterapia é uma forma de investimento na sua saúde mental, que possui valor imensurável.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className='bg-blue-200 rounded-md shadow-none'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className='font-bold text-lg py-2 hover:text-blue-500 '>Eu não consigo pagar por uma sessão, e agora?</Typography>
        </AccordionSummary>
        <AccordionDetails className='bg-white shadow-none'>
          <Typography className='bg-white shadow-none py-4 text-lg'>
            Eu disponibilizo semanalmente conteúdos gratuitamente nas minhas redes sociais, pincipalmente no Instagram, Youtube e Tiktok. Meu objetivo é justamente oferecer como eu posso, acesso de todos os públicos ao conhecimento sobre ferramentas para investir em sua saúde mental.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className='bg-blue-200 rounded-md shadow-none'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className='font-bold text-lg py-2 hover:text-blue-500 '>Ainda estou em dúvida se vale a pena gastar meu dinheiro com terapia.</Typography>
        </AccordionSummary>
        <AccordionDetails className='bg-white shadow-none'>
          <Typography className='bg-white shadow-none py-4 text-lg'>
            EU ENTENDO! É um investimento alto e você ainda está na dúvida se verá valor agregado de forma prática.

            O que posso te dizer é que pessoas com inteligência emocional e mentalmente saudáveis tendem a ter mais sucesso em suas carreiras e conseguem tomar decisões financeiras melhores, o contrário também é verdadeiro. A ansiedade com relação a contas é algo extremamente comum e tema frequente na clínica, afinal, 4 em cada 10 brasileiros estão endividados. Problemas financeiros são também o principal motivo para separação de casais, portanto tem grande peso e importância em nossas vidas. A psicoterapia pode se encarregar inclusive de te ajudar a ter uma relação mais saudável e leve com o dinheiro e ter maior prosperidade financeira através do exercÍcio de habilidades de autoconsciência, estipulação de objetivos de vida, desenvolvimento pessoal e de carreira e mudança de hábitos. De qualquer forma, se você ainda tem curiosidade, talvez valha a pena o teste, você sempre pode decidir não dar continuidade à terapia no momento que achar melhor!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </section>
  );
}

export default FAQ;