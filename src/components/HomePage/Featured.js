import React from 'react';
import Product from '../Product';
import { Link } from 'react-router-dom';
import Title from '../Title';
import { ProductConsumer } from '../../context';

function Featured() {
  return (
    <section className='py-5'>
      <div className='container'>
        <Title title='featured products' center='true' />
        {/* Products */}
        <div className='row my-5'>
          <ProductConsumer>
            {(value) => {
              const { featuredProducts } = value;
              return featuredProducts.map((product) => (
                <Product key={product.id} product={product} />
              ));
            }}
          </ProductConsumer>
        </div>
        <div className='row mt-5'>
          <div className='col text-center'>
            <Link to='/products' className='main-link'>
              our products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Featured;
