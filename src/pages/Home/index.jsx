import React from 'react';
import { Navbar, Projectone, Footer } from '../../components/index';

export const Home = () => {
  return (
    <div className='bg-black text-white'>
      <Navbar />
      <Projectone />
      <Footer />
    </div>
  )
}
