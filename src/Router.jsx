import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Landing from "./components/pages/Landing";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
