import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // elemento padre
    children: [
      // elementos hijos
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
    ],
  },// puedo añadir múltiples rutas root
  /* {
    path: '/admin',
    children
  } */ /* ... */
]);

/* const router = createBrowserRouter(routeDefinitions); */

function App() {
  return <RouterProvider router={router} />;
}

export default App;
