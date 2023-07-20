import React from 'react'

const CallToAction = () => {
  return (
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
  )
}

export default CallToAction