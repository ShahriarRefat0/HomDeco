import React from 'react';

const ProductCard = ({ product }) => {
  const { name, image, price, category } = product;



  return (
    <div>
      <div className="card bg-base-100 shadow-sm hover:scale-105 transition ease-in-out">
        <figure className='h-48 overflow-hidden'>
          <img className='w-full object-cover' src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{category}</p>
          <p>${price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;