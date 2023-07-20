import React from 'react'

interface SubtituloProps {
  text: string
}

const Subtitulo = (props: SubtituloProps) => {
  return (
    <h2 className='text-3xl max-sm:text-xl max-sm:mx-8 font-bold text-center mb-10'>{props.text}</h2>
  )
}

export default Subtitulo