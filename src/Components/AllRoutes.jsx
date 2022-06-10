import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Cart from '../Pages/Cart'
import Homepage from '../Pages/Homepage'
import Product from '../Pages/Product'
import Products from '../Pages/Products'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/products/:id" element={<Product/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes