import React from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import IntroductionPage from "./pages/IntroductionPage";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Success from "./pages/Success";

const App = () => {

  const routes = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          index:true,
          element:<IntroductionPage/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/projects",
          element:<Projects/>
        },
        {
          path:"/contact",
          element:<Contact/>
        }
      ]
    }
  ])


  return <RouterProvider router={routes}></RouterProvider>
};

export default App;
