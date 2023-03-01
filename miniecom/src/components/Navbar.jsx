import React from 'react'
import { Flex, Spacer,Image,Text,Icon } from '@chakra-ui/react'
import {Link} from "react-router-dom"
import { BsSearch,BsBasket3 } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
// import { BsSearch } from "react-icons/bs";

const Navbar = () => {
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
 <Icon boxSize="20px" mx={8} as={BsBasket3} />
 <Text color="red">0</Text>

 <Spacer/>
 
   </Flex>
  )
}

export default Navbar