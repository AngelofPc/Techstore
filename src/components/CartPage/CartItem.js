import React from 'react';
import {
  FaChevronCircleDown,
  FaChevronCircleUp,
  FaTrash,
} from 'react-icons/fa';

function CartItem({ cartItem, increment, decrement, removeItem }) {
  const { id, title, price, count, total, image } = cartItem;
  return (
    <div className='row mt-5 mt-lg-0 text-capitalize text-center align-items-center'>
      {/* Image  */}
      <div className='col-10 mx-auto col-lg-2 pb-2'>
        <img src={image} width='60' className='img-fluid' alt={title} />
      </div>
      {/* Title  */}
      <div className='col-10 mx-auto col-lg-2 pb-2'>
        <span className='d-lg-none'>product:</span> {title}
      </div>
      {/* price  */}
      <div className='col-10 mx-auto col-lg-2 pb-2'>
        <span className='d-lg-none'>price:</span> ${price}
      </div>
      {/* control */}
      <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
        <div className='d-flex justify-content-center'>
          <div>
            <FaChevronCircleDown
              className='cart-icon text-primary'
              onClick={() => decrement(id)}
            />
            <span className='text-title text-muted mx-3'>{count}</span>
            <FaChevronCircleUp
              className='cart-icon text-primary'
              onClick={() => increment(id)}
            />
          </div>
        </div>
      </div>
      {/* remove item  */}
      <div className='col-10 mx-auto col-lg-2'>
        <FaTrash
          className='cart-icon text-danger'
          onClick={() => removeItem(id)}
        />
      </div>
      {/* total  */}
      <div className='col-10 mx-auto col-lg-2'>
        <span className='d-lg-none  text-muted'>total:</span> ${total}
      </div>
    </div>
  );
}

export default CartItem;
