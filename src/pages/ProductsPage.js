import React from 'react';
import Products from '../components/ProductsPage/Products';
import Hero from '../components/Hero';
import ProductsBcg from '../images/productsBcg.jpeg';

function ProductsPage() {
  return (
    <>
      <Hero img={ProductsBcg}></Hero>
      <Products />
    </>
  );
}

export default ProductsPage;
