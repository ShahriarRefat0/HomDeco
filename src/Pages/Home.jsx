import { Link } from "react-router";
import ProductCard from "../Components/ProductCard";
import useProducts from "../Hooks/useProducts";
import SkeletonLoader from "../Components/SkeletonLoader";

const Home = () => {
  const {products, loading} = useProducts();


const featuredProducts = products.slice(0, 6)



  return (
    <div>
      <div className="flex justify-between py-5 items-center w-11/12 mx-auto mt-8">
        <h1 className="text-3xl font-semibold">Featured Products</h1>
        <Link className="btn btn-outline" to="/products">
          See all products
        </Link>
      </div>

      {loading ? (
        <SkeletonLoader></SkeletonLoader>
      ) : (
        <div className="grid md:grid-cols-3 grid-cols-1 w-11/12 mx-auto gap-8 mt-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;