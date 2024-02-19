import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./components/pages/Root";
import Landing from "./components/pages/Landing";
import Shop from "./components/pages/Shop";
import Cart from "./components/pages/Cart";
import Product from "./components/pages/Product";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Landing />,
        },
        {
          path: "/shop",
          element: <Shop />,
          loader: () => {
            return fetch(
              "https://api.escuelajs.co/api/v1/products/?categoryId=2",
            )
              .then((res) => res.json())
              .then((data) => data);
          },
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/product/:productId",
          element: <Product />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
