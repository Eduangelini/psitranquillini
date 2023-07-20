import React from 'react'

const Ebook = () => {
  return (
    <section className='flex justify-center mx-6'>
      <div className='bg-blue-300 lg:w-6/12 rounded-xl flex max-lg:flex-col justify-center max-lg:text-center items-center py-10 text-white'>
        <div className='flex flex-col md:mx-10 max-md:mx-5 lg:items-start gap-y-3 xl:me-56 lg:me-16'>
          <h2 className='text-3xl max-sm:mx-8 font-bold lg:text-start '>Ebook Caixa de Ferramentas</h2>
          <p className='text-xl max-sm:mx-8 font-medium'>Baixe agora o ebook caixa de ferramentas e tenha em mãos ferramentas poderosas para ajudar a lidar com a ansiedade a qualquer hora.</p>
          <button className='border-none bg-blue-500 text-white p-4 rounded-md font-medium hover:bg-blue-700'>
            Baixa agora
          </button>
        </div>
      </div>
    </section>
  )
}

export default Ebook