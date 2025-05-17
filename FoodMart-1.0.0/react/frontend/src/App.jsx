import { useState } from 'react'


import Home from './components/Home'

import Category from './components/Category'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

import AddCategory from './components/AddCategory'
import Product from './components/Product'
import AddProduct from './admin/AddProduct'
import CateProduct from './admin/CateProduct'







function App() {

  const routerr=createBrowserRouter([
    { path: "/", element: <> <Home /></>},
    { path: "/category", element: <> <Category /></>},
    { path: "/product", element: <> <Product /></>},
    { path: "/addcategory", element: <> <AddCategory /></>},
    { path: "/addproduct", element: <AddProduct />},
    { path: "/cateproduct/:id", element: <CateProduct />},
  ])

  return (
    <>
      
      <RouterProvider router={routerr} />
    </>
  )
}

export default App
