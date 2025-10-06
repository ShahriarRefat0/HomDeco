import React, { useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { loadWishlist, removeFromWishlist } from '../Utils/localStorage';

const WishList = () => {
  const [wishList, setWishList] = useState(() => loadWishlist());
  const [sortOrder, setSortOrder] =useState('none')

  

if(!wishList.length) return <p className='text-center mt-40 text-2xl font-semibold text-gray-400'>No data available</p>

  const sortedItem = (() => {
    if (sortOrder === 'price-asc') {
      return[...wishList].sort((a,b) => a.price - b.price)
    } else if (sortOrder === 'price-desc') {
      return [...wishList].sort((a,b) => b.price - a.price)
    } else {
      return wishList
    }
  })()


const handleRemove = (id) => {
  const updated = removeFromWishlist(id);
  setWishList(updated);
};



  
  //generate chart data
  const totalByCategory = {}
  wishList.forEach(Product => {
    const category = Product.category

    totalByCategory[category] =
      (totalByCategory [category] || 0) + Product.price
  })

  const charData = Object.keys(totalByCategory).map(category => ({
    category,
    total: totalByCategory[category]
  }))


  return (
    <div className="space-y-6 w-11/12 mx-auto">
      <div className="flex justify-between py-5 items-center">
        <h1 className="text-3xl font-semibold">
          Wishlist{" "}
          <span className="text-sm text-gray-500">
            ({sortedItem.length}) Products Found.
          </span>
        </h1>

        <label className="form-control w-full max-w-xs">
          <select
            className="select select-bordered"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort by price</option>
            <option value="price-asc">Low-&gt;High</option>
            <option value="price-desc">High-&gt;Low</option>
          </select>
        </label>
      </div>
      <div className="space-y-3">
        {sortedItem.map((p) => (
          <div
            key={p.id}
            className="card card-side bg-base-100 shadow border-gray-300 border-1"
          >
            <figure>
              <img
                className="w-40 h-28 object-cover"
                src={p.image}
                alt={p.name}
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">{p.name}</h3>
              <p className="text-base-content/70">{p.category}</p>
            </div>
            <div className="pr-4 flex items-center gap-3">
              <div className="font-semibold">${p.price}</div>
              <button
                onClick={() => handleRemove(p.id)}
                className="btn btn-outline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* //chart */}
      <div className="space-y-3">
        <h3 className="text-xl font-semibold ">Wishlist Chart</h3>
        <div className="bg-base-100 border rounded-xl p-4 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={charData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="total" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default WishList;