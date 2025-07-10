import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/layout";
import HomePage from "./pages";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <HomePage /> }],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
      offset: 0,
    });
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
