import React from 'react'

interface HeaderComponentsProps {
  children: React.ReactNode
}

const HeaderComponents = (props: HeaderComponentsProps) => {
  return (
    <header className='flex flex-col h-screen'>
      {props.children}
    </header>
  )
}

export default HeaderComponents