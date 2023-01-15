import React, {Children, lazy} from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';


//React Router imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Edmonton = lazy(()=>import("./views/Edmonton"))
const Education = lazy(()=>import("./views/Education"))
const Food = lazy(()=>import("./views/Food"))
const Landscape = lazy(()=>import("./views/Landscape"))

const DetailAttraction = lazy(()=>import("./views/DetailAttraction"))

const withLoadingComponent = (comp) => (
  <React.Suspense fallback={<div>Loading...</div>}>
    {comp}
  </React.Suspense>
)
//Declaring routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/',
    element: <App />,
    children:[
      {
        path:"/Edmonton",
        element: withLoadingComponent(<Edmonton />)
      },
      {
        path:"/Education",
        element: withLoadingComponent(<Education />)
      },
      {
        path:"/Food",
        element: withLoadingComponent(<Food />)
      },
      {
        path:"/Landscape",
        element: withLoadingComponent(<Landscape />)
      },
      {
        path:"/DetailAttraction",
        element: withLoadingComponent(<DetailAttraction />)
      }
    ],
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);