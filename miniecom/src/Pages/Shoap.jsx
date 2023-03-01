import { SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Filter from '../components/Filter'
import ProductsCart from '../components/ProductsCart'
import { getData } from '../Redux/Products/action'

const Shoap = () => {
  const products = useSelector((state) => state.products)
  const loading = useSelector((state) => state.loading)
  const error = useSelector((state) => state.error)
  console.log(products)
  const dispatch = useDispatch()

  useEffect(() => {
    if(products?.length === 0){
      dispatch(getData())
    }
  // dispatch(getData())
  },[dispatch, products.length])
  return (
    <div>
      <Text>Shop All</Text>
      <Filter/>

      {
        loading ? 
        <h1>loading...</h1> 
        :error ? 
        <h2>Something went wrong please try again later</h2>
        :<SimpleGrid columns={[1,2,3]}>
          {
            products.length>0 && products.map((product) => {
              return <ProductsCart key={product.id} product={product}/>
            })
          }
        </SimpleGrid>
      }
    </div>
  )
}

export default Shoap