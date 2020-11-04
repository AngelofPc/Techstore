import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/HomePage/Services';
import Featured from '../components/HomePage/Featured';

function HomePage() {
  return (
    <>
      <Hero title='awesome gadgets'>
        <Link to='/products' className='main-link' style={{ margin: '2rem' }}>
          our products
        </Link>
      </Hero>
      <Services />
      <Featured />
    </>
  );
}

export default HomePage;
