import React from 'react';
import Hero from '../components/Hero';
import defaultBCG from '../images/defaultBcg.jpeg';
import { Link } from 'react-router-dom';

function Default() {
  return (
    <>
      <Hero img={defaultBCG} title='404' max='true'>
        <h2 className='text-uppercase'>Page not found</h2>
        <Link
          className='main-link'
          to='/'
          style={{
            marginTop: '2rem',
          }}>
          return home
        </Link>
      </Hero>
    </>
  );
}

export default Default;
