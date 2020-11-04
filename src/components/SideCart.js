import React from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';

function SideCart() {
  return (
    <ProductConsumer>
      {(value) => {
        const { cartOpen, closeCart, cart, cartTotal } = value;
        return (
          <CartWrapper show={cartOpen} onClick={closeCart}>
            <ul>
              {cart.map((item) => {
                return (
                  <li className='cart-item mb-4' key={item.id}>
                    <img src={`../${item.image}`} alt={item.title} width='35' />
                    <div className='mt-3'>
                      <h6 className='text-uppercase'>{item.title}</h6>
                      <h6 className='text-title text-capitalize'>
                        amount: {item.count}
                      </h6>
                    </div>
                  </li>
                );
              })}
            </ul>
            <h4 className='text-capitalize text-main'>
              cart total: ${cartTotal}
            </h4>
            <div className='text-center my-5'>
              <Link className='main-link' to='/cart'>
                checkout
              </Link>
            </div>
          </CartWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const CartWrapper = styled.div`
  position: fixed;
  top: 48px;
  right: 0;
  height: 100%;
  width: 100%;
  background: var(--mainGrey);
  z-index: 1;
  border-left: 4px solid var(--primaryColor);
  transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};
  transition: var(--mainTransition);
  @media (min-width: 576px) {
    width: 20rem;
  }
  overflow: scroll;
  padding: 2rem;
  ul {
    padding: 0 !important;
  }
  .cart-item {
    list-style-type: none;
  }
`;

export default SideCart;
