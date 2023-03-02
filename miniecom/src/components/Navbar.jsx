import React from 'react'
import { Flex, Spacer,Image,Text,Icon, Button,Box } from '@chakra-ui/react'
import {Link} from "react-router-dom"
import { BsSearch,BsBasket3 } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
// import { BsSearch } from "react-icons/bs";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import { decreaseQty, increaseQty, removeFromCart } from '../Redux/Cart/action';

const Navbar = () => {
  const cart = useSelector((state) => state.cart.cart)
  console.log(cart)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const dispatch =useDispatch()

  const handleIncrease =(id,size)=> {
    dispatch(increaseQty({id,size}))
  }

  const handleDecrease =(id,size,qty)=> {
    if(qty>1){
      dispatch(decreaseQty({id,size,qty}))

    }
    else{
      dispatch(removeFromCart({id,size, qty}))
    }
    // dispatch(decreaseQty(id,size))
  }
 //"1,999"
  const convertToNumber = (str) => {
    if(Number(str)){
      return Number(str)
    }
    //get like that ["1",999]
    let arr = str.includes(",")? str.split(","):[]
    let final_str=arr.reduce((a,c) => a+c, "")

    let result = Number(final_str);
    return result
  }

  let total_orignal_price =0;
  let total_final_price =0;

  cart.forEach((prod) => {
    total_orignal_price +=convertToNumber(prod.original_price) * prod.qty 
    total_final_price += convertToNumber(prod.final_price) * prod.qty 
  })

  return (
   <Flex
   borderBottom="0.2px solid #cccccc"
   borderTop="1px solid #cccccc"
   mt="5px"
   bg="#ffffff"
   p={1}
   align="center"
  justify="center"
   wrap="nowrap"
   >
   <Spacer/>
 <Link to="/">
 <Image src="https://cdn.shopify.com/s/files/1/0258/2485/4100/files/flatheads-logo-new-hotizontal_180x_2x_bf74c8db-79f1-4904-b343-3b0e2681ec07_192x32.png?v=1647508945" 
   alt='logo' 
    height="25px"
    m={5}
   />
 </Link>
 <Spacer/>
 <Link style={{textDecoration:"none" ,color:"black"}}  to="/collections/all"><Text fontWeight="600"   px={4} py={2}  fontSize="20px" >SHOP</Text></Link>
 <Link style={{textDecoration:"none" ,color:"black"}} to="men"><Text fontWeight="600"   px={4} py={2}  fontSize="20px" >Men</Text></Link>
 <Link style={{textDecoration:"none" ,color:"black"}} to="women"><Text fontWeight="600"   px={4} py={2}  fontSize="20px" >WOMEN</Text></Link>
 <Link style={{textDecoration:"none" ,color:"black"}} to="help"><Text fontWeight="600"   px={4} py={2}  fontSize="20px" >hELP</Text></Link>
 <Link style={{textDecoration:"none" ,color:"black"}} to="shoes"><Text fontWeight="600"   px={4} py={2}  fontSize="20px" >SHOES</Text></Link>
<Link style={{textDecoration:"none" ,color:"black"}} to=""><Text fontWeight="600"   px={4} py={2}  fontSize="20px" >CLASSIC</Text></Link>
 <Link style={{textDecoration:"none" ,color:"black"}} to="about"><Text fontWeight="600"   px={4} py={2}  fontSize="20px" >ABOUT</Text></Link>
 <Link style={{textDecoration:"none" ,color:"black"}} to="contact"><Text fontWeight="600"   px={4} py={2}  fontSize="20px" >CONTACT</Text></Link>

 <Spacer/>
 <Icon boxSize="20px" mx={15} as={BsSearch} />
 <Icon boxSize="20px" mx={15} as={AiOutlineUser} />
 
 <Flex ref={btnRef} colorScheme='teal' onClick={onOpen} align="center">
 <Icon boxSize="20px"  as={BsBasket3} />
 <Text mb="20px" color="red">{cart ? cart.length : 0}</Text>
 </Flex>

 <Spacer/>

 <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Cart ({cart.length})</DrawerHeader>

          <DrawerBody>
          {
            cart.length >0 && cart.map((item)=> {
              return <Flex key={item.id}  justify="center">
                <Image boxSize="75px" src={item.images[0]} alt="shoe"/>
                <Box>
                  <Text casing="lowercase">{`${item.name} | ${item.color} | ${item.gender}`}</Text>
                  <Text as="sup">{item.size}</Text>

                  <Flex align="center">
                    <Button isDisabled ={item.qty===0} onClick={()=> handleDecrease(item.id, item.size, item.qty)}>-</Button> 
                    <Text>{item.qty}</Text>
                    <Button onClick={()=> handleIncrease(item.id, item.size)}>+</Button>
                  </Flex>

                  <Flex justify="flex-end">
                  <Text as="s" >Rs. {item.original_price}</Text>
                  <Text ml="20px"><span>Rs</span> {item.final_price}</Text>

                  </Flex>
                </Box>
              </Flex>
            })
          }
          </DrawerBody>
          <Flex justify="space-between" align="center" m={2}>
            <Text>SUBTOTAL</Text>
            <Flex>
              <Text p={2} as="s">Rs. {total_orignal_price}</Text>
              <Text p={2} >Rs. {total_final_price}</Text>
            </Flex>
           </Flex>

          <DrawerFooter>
        
          <Button colorScheme="pink">PROCEED TO CHECKOUT</Button>
          </DrawerFooter>
         
        </DrawerContent>
      </Drawer>
 
   </Flex>
  )
}

export default Navbar