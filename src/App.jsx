import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";


const App = () => {
  // return (
  // <Router>
  //   <Routes>
  //     <Route path="/" element={<Layout />}>
  //       <Route index element={<Home />}/>
  //       <Route path="about" element={<About />}/>
  //     </Route>
  //   </Routes>
  // </Router>
  // );

  const router = createBrowserRouter([
    {
      // parent route component
      element: <Layout />,
      // child route components
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
