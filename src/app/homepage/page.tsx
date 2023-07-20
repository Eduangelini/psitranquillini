'use client'

import React from 'react';

import NavBar from '@/components/navigation'
import Hero from '@/components/hero'
import TrustedBy from '@/components/trusted'
import Abordagens from '@/components/abordagens'
import AboutMe from '@/components/aboutme'
import WorkSolutions from '@/components/workSolution'
import SocialMedia from '@/components/socialMedia'
import ContactMe from '@/components/contactMe'
import Feedback from '@/components/feedback'
import Ebook from '@/components/ebook'
import FAQ from '@/components/faq'
import CallToAction from '@/components/cta'
import FooterLinks from '@/components/footerLinks'
import DevelopedBy from '@/components/developedBy'


const Home = () => {
  return (
    <>
      <header className='flex flex-col h-screen'>
        <NavBar />
        <Hero />
      </header>

      <main className='flex flex-col gap-y-4 max-sm:gap-y-14 items-center justify-center'>
        <TrustedBy />
        <Abordagens />
        <AboutMe />
        <WorkSolutions />
        <SocialMedia />
        <ContactMe />
        <Feedback />
        <Ebook />
        <FAQ />
        <CallToAction />
      </main>

      <footer className='mt-10 flex flex-col'>
        <FooterLinks />
        <DevelopedBy />
      </footer>
    </>
  )
}

export default Home