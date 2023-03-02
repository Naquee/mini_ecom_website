import { Box, HStack, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ProductsCart = ({product}) => {
   
    const {id, name,color,gender,original_price,final_price,images,sizes} =product
    const [img,setImg]=useState(images[0])

    const navigate = useNavigate();

    const showOtherImages =() => {
        setImg(images[1])
    }
    const showOrginalImages =() => {
        setImg(images[0])
    }
  return (
    <Box onMouseEnter={showOtherImages}
    onMouseLeave={showOrginalImages}
    onClick={() => navigate(`/collections/all/${id}`)}
    >
        <Image src={img} alt={name + "shoe"}/>
        <Text>{name + " | " + color + " | " + gender }</Text>
        <HStack justify="center">
            <Text>{final_price}</Text>
            <Text as='s'>{original_price}</Text>
        </HStack>
    </Box>
  )
}

export default ProductsCart