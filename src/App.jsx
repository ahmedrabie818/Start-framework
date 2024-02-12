import React, { Children } from 'react'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home'
import Portfolio from './Components/Portfolio/Portfolio'
import NotFound from './Components/NotFound/NotFound'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
export default function App() {
  let routers = createBrowserRouter([{path:"" , element:<Layout/> ,children : [
    {index:true, element:<Home/>  },
    {path:"about", element:<About/>  },
    {path:"contact", element:<Contact/>  },
    {path:"portfolio", element:<Portfolio/>  },
    {path:"*", element:<NotFound/>  },
  ]}])
  return <>
<RouterProvider router={routers}>
</RouterProvider>
  </>
}
