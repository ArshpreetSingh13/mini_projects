import { useState } from 'react'


import Home from './components/Home'

import Category from './components/Category'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'

import AddCategory from './components/AddCategory'
import Product from './components/Product'
import AddProduct from './admin/AddProduct'
import CateProduct from './admin/CateProduct'
import ManageCategory from './admin/ManageCategory'
import ManageProduct from './admin/ManageProduct'
import Login from './components/Login'
import Register from './components/Register'
import UpdateCategory from './admin/UpdateCategory'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import UpdateProduct from './admin/updateProduct'






function App() {

  const routerr=createBrowserRouter([
    { path: "/", element: <> <Home /></>},
    { path: "/login", element: <> <Login /></>},
    { path: "/category", element: <> <Category /></>},
    { path: "/product", element: <> <Product /></>},
    { path: "/addcategory", element: <> <AddCategory /></>},
    { path: "/addproduct", element: <AddProduct />},
    { path: "/cateproduct/:id", element: <CateProduct />},
    { path: "/managecategory", element: <ManageCategory />},
    { path: "/manageproduct", element: <ManageProduct />},
    { path: "/register", element: <Register />},
    { path: "/updatecategory/:id", element: <UpdateCategory />},
    { path: "/updateproduct/:id", element: <UpdateProduct />},
  ])

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />
      <RouterProvider router={routerr} />
    </>
  )
}

export default App
