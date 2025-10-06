import { createBrowserRouter } from "react-router";

import Products from "../Pages/Products";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import WishList from "../Pages/WishList";
import ProductsDetails from "../Pages/ProductsDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <p>loading...</p>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/whishList",
        element: <WishList></WishList>,
      },
      {
        path: '/product/:id',
        element: <ProductsDetails/>
      }
    ],
  },
  // {
  //   path: '*',
  //   element: <Error></Error>
  // }
]);

export default router;
