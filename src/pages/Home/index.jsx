import React from 'react';
import { Navbar, Hero, Projectone, Footer } from '../../components/index';

export const Home = () => {
  return (
    <div className='bg-black text-white'>
      <Navbar />
      <Hero />
      <Projectone />
      <Footer />
    </div>
  )
}
