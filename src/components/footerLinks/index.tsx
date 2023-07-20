import React from 'react'
import Image from 'next/image'

import instagramfooter from '../../../public/instagram-footer.svg'
import tiktokfooter from '../../../public/tiktok-footer.svg'
import youtubelogo from '../../../public/youtube-logo.svg'
import twitterlogo from '../../../public/twitter-logo.svg'

const FooterLinks = () => {
  return (
    <div className='flex max-sm:flex-col max-sm:gap-y-8 justify-around'>
      <div className='px-4'>
        <p className='my-2 font-bold text-lg'>Redes Sociais:</p>
        <p className='my-4'>Acompanhe e fique por dentro das novidades.</p>
        <ul className='flex gap-x-6'>
          <li className='cursor-pointer lg:opacity-50 hover:opacity-100'>
            <Image src={tiktokfooter} alt="Logo" width={60} />
          </li>
          <li className='cursor-pointer lg:opacity-50 hover:opacity-100'>
            <Image src={instagramfooter} alt="Logo" width={60} />
          </li>
          <li className='cursor-pointer lg:opacity-50 hover:opacity-100'>
            <Image src={youtubelogo} alt="Logo" width={60} />
          </li>
          <li className='cursor-pointer lg:opacity-50 hover:opacity-100'>
            <Image src={twitterlogo} alt="Logo" width={60} />
          </li>
        </ul>
      </div>
      <div className='px-4'>
        <p className='my-2 font-bold text-lg'>Meus serviços</p>
        <ul className='flex flex-col gap-y-3'>
          <li>Acompanhamento Clínico</li>
          <li>Palestras</li>
          <li>Criação de conteúdo</li>
          <li>Grupo de Desafios</li>
        </ul>
      </div>
      <div className='px-4'>
        <p className='my-2 font-bold text-lg'>Recomendações</p>
        <ul className='flex flex-col gap-y-3'>
          <li>Blog</li>
          <li>Livros</li>
          <li>Psi.care</li>
        </ul>
      </div>
      <div className='px-4'>
        <p className='my-2 font-bold text-lg'>E-books</p>
        <ul className='flex flex-col gap-y-3'>
          <li>Caixa de ferramentas</li>
          <li>3 Exercícios mentais</li>
        </ul>
      </div>
    </div>
  )
}

export default FooterLinks