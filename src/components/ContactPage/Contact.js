import React from 'react';
import Title from '../Title';

function Contact() {
  return (
    <section className='py-5'>
      <div className='row'>
        <div className='col-10 mx-auto col-md-6 my-3'>
          <Title title='contact us' />
          <form
            action='https://formspree.io/dagrandmaster01@gmail.com'
            method='POST'
            className='mt-5'>
            <div className='form-group'>
              <input
                type='text'
                name='firstname'
                id='firstname'
                placeholder='John Doe'
                className='form-control'
              />
            </div>
            <div className='form-group'>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='John@doe.com'
                className='form-control'
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                name='subject'
                id='subject'
                placeholder='Important!'
                className='form-control'
              />
            </div>
            <div className='form'>
              <textarea
                name='message'
                id='message'
                rows='10'
                cols='30'
                placeholder='lorem...'
                className='form-control'></textarea>
            </div>
            <div className='form-group mt-3'>
              <input
                type='submit'
                value='Send'
                className='form-control text-white bg-primary'
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
