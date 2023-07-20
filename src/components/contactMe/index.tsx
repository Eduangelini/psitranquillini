import React from 'react'

const ContactMe = () => {
  return (
    <section className='lg:my-10 lg:mx-20'>
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
  )
}

export default ContactMe