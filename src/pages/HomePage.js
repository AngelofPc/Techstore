import React from 'react';
import { ProductConsumer } from '../context';

function HomePage() {
  return (
    <>
      <ProductConsumer>{(value) => <h1>Context</h1>}</ProductConsumer>
    </>
  );
}

export default HomePage;
