import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Button, Flex, HStack, SimpleGrid, Text } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleProductData } from '../Redux/Products/action'
import ProductsCart from './ProductsCard'
import { addToCart } from '../Redux/Cart/action'

const ProductsDetails = () => {
  const singleProduct = useSelector((state) => state.product.singleProduct)
  const loading = useSelector((state) => state.product.loading)
  const error = useSelector((state) => state.product.error)
  const {id} =useParams();

  const dispatch =useDispatch();

  const[size,setSize]=useState(null) 


  useEffect(() => {
    if(id){
      dispatch(getSingleProductData(id))
    }
  },[dispatch, id])

  // console.log(singleProduct)

  if(loading){
    return <h1>loading...</h1>
  }

  if(error){
    return <h1>something went wrong</h1>
  }

  if(Object.keys(singleProduct).length===0){
    return <h2>Products {id} not found</h2>
  }

  const handleCart = () => {
    const payload ={
      ...singleProduct,
      size
    }
    // console.log("payload",payload)
    dispatch(addToCart(payload))

  }

  return (
    <Flex justify="center" align="center">
    <ProductsCart product={singleProduct}/>

    <Box>
    <Text fontSize='xl'>Choose a size</Text>
    <HStack p={10}>
      {
        singleProduct?.sizes.map((size) => {
          return <Button key={size}
          onClick={() => setSize(size)}
           colorScheme='teal' size='xs'>
                      {size}
                  </Button>
        })
      }
    </HStack>
    <Button onClick={handleCart} isDisabled={!size} colorScheme='blue'>
      {!size ? "please select size" : "Add To Cart"}
    </Button>

    </Box>

    </Flex>
  )
}

export default ProductsDetails