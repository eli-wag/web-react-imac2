import { createBrowserRouter, Navigate } from 'react-router-dom';
import Home from "../components/Home.jsx";
import Contact from "../components/Contact.jsx";
import Product from "../components/Product.jsx";

export default createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/products/:id",
    element: <Product />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);