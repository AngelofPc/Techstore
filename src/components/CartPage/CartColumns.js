import React from 'react';

function CartColumns() {
  return (
    <div className='container-fluid text-center d-none d-lg-block my-5'>
      <div className='row'>
        <div className='col-lg-2'>
          <p className='text-uppercase'>products</p>
        </div>
        {/* col */}
        <div className='col-lg-2'>
          <p className='text-uppercase'>name of product</p>
        </div>
        {/* col */}
        <div className='col-lg-2'>
          <p className='text-uppercase'>price</p>
        </div>
        {/* col */}
        <div className='col-lg-2'>
          <p className='text-uppercase'>quantity</p>
        </div>
        {/* col */}
        <div className='col-lg-2'>
          <p className='text-uppercase'>remove</p>
        </div>
        {/* col */}
        <div className='col-lg-2'>
          <p className='text-uppercase'>total</p>
        </div>
        {/* col */}
      </div>
    </div>
  );
}

export default CartColumns;
