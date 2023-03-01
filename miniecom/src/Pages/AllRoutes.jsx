import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductsDetails from '../components/ProductsDetails'
import Conatct from './Conatct'
import Home from './Home'
import Shoap from './Shoap'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/collections/all' element={<Shoap/>}/>
            <Route path='/collections/all/:id' element={<ProductsDetails/>}/>
            <Route path='/contact' element={<Conatct/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes