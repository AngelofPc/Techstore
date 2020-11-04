import React from 'react';
import Title from '../Title';
import aboutBcg from '../../images/aboutBcg.jpeg';

function Info() {
  return (
    <section className='py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-6 my-3'>
            <img
              src={aboutBcg}
              alt='about'
              className='img-fluid img-thumbnail'
              style={{ background: 'var(--darkGrey)' }}
            />
          </div>
          <div className='col-10 mx-auto col-md-6 my-3'>
            <Title title='about us' />
            <p className='text-lead text-muted my-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque deserunt dignissimos qui tenetur dicta quisquam
              incidunt impedit repellat expedita ex nostrum quia voluptatum
              repudiandae ratione, voluptatem accusantium autem! Ut, beatae?
            </p>
            <p className='text-lead text-muted my-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque deserunt dignissimos qui tenetur dicta quisquam
              incidunt impedit repellat expedita ex nostrum quia voluptatum
              repudiandae ratione, voluptatem accusantium autem! Ut, beatae?
            </p>
            <button className='main-link' style={{ marginTop: '2rem' }}>
              more info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
