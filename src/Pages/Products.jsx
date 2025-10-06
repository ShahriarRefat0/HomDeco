import React from 'react';
import useProducts from '../Hooks/useProducts';
import ProductCard from '../Components/ProductCard';

const Products = () => {
const {products} = useProducts()


  return (
    <div>
      <div className="flex justify-between py-5 items-center w-11/12 mx-auto mt-8">
        <h1 className="text-3xl font-semibold">All Products</h1>
        <button className="btn btn-outline">
          Search
        </button>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 w-11/12 mx-auto gap-8 mt-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;