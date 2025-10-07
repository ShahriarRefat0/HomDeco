import React, { useState } from 'react';
import useProducts from '../Hooks/useProducts';
import ProductCard from '../Components/ProductCard';
import SkeletonLoader from '../Components/SkeletonLoader';

const Products = () => {
const {products, loading} = useProducts()
  const [search, setSearch] = useState('');
 const term = search.trim().toLowerCase();

  const searchedProducts = term
    ? products.filter((product) => product.name.toLowerCase().includes(term))
    : products; 


  return (
    <div>
      <div className="flex justify-between py-5 items-center w-11/12 mx-auto mt-8">
        <h1 className="md:text-3xl text-xl font-semibold">
          All Products{" "}
          <span className="text-sm text-gray-500 ">
            ({searchedProducts.length}) Products Found
          </span>
        </h1>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            required
            placeholder="Search Products"
          />
        </label>
      </div>
      {loading ? (
        <SkeletonLoader count={16}></SkeletonLoader>
      ) : (
        <div className="grid md:grid-cols-3 grid-cols-1 w-11/12 mx-auto gap-8 mt-3">
          {searchedProducts.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;