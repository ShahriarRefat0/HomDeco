import React from 'react';
import { Link, useParams } from 'react-router';
import useProducts from '../Hooks/useProducts';
import { updateList } from '../Utils/localStorage';
import SkeletonForDetails from '../Components/SkeletonForDetails';

const ProductsDetails = () => {

  const {id} = useParams()
  const { products, loading } = useProducts()

  const product = products.find((product) => product.id === parseInt(id))
  
  if(loading){return <SkeletonForDetails></SkeletonForDetails>}
  const { name, category, image, price, description } = product;
  



  // const handleAddToWishList = () => {
  //   const existingList = JSON.parse(localStorage.getItem('wishList'))
  //   let updatedList = [];
  //   if (existingList) {
  //     const isDuplicate = existingList.some(p => p.id === product.id)

  //     if (isDuplicate) {
  //       return alert('sorry vai')
  //     }
  //     updatedList = [...existingList, product];
  //   } else {
  //     updatedList.push(product);
  //   }
  //   localStorage.setItem("wishList", JSON.stringify(updatedList));
  // }


  return (
    <div>
      <div className="card bg-base-100 border-1 border-gray-300  w-11/12 mx-auto my-20 pt-5">
        <figure className="h-[500px] overflow-hidden p-5 ">
          <img className="w-full object-cover " src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Details: {description}</p>
          <p>Category:  {category}</p>
          <p>
            Price: <span className='font-bold'>${price}</span>{" "}
          </p>
          <div className="card-actions justify-end">
            <Link
              onClick={() => updateList(product)}
              to={`/product/${id}`}
              className="btn btn-outline"
            >
              Add to wish ist
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;