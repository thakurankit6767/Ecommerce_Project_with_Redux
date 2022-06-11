import React, { useEffect } from "react";
import { Box, Stack } from "@chakra-ui/react";
import FilterComponent from "../Components/FilterComponent";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../Redux/products/action";
import {
  Center,
  useColorModeValue,
  Heading,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  const products = useSelector((store) => store.ecommerceData.products);
  // console.log(products)
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    if (products?.length === 0) {
      let params = {
        category: searchParams.getAll("category"),
      };
      dispatch(fetchData(params));
    }
  }, [dispatch, products?.length, searchParams]);
  console.log(products);
  return (
    <div>
      <Box>
        <Stack display={{ md: "flex" }} flexDirection={{ md: "row" }}>
          <Box>
            <FilterComponent />
          </Box>
          
          <Box>
            <Heading as="h3">Products</Heading>
            
            <Flex flexWrap="wrap" justifyContent="space-around">
              {products.map((product) => {
                return (
                  <ProductSimple
                    key={product.id}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                  />
                );
              })}
            </Flex>
            
            {/* <ProductSimple /> */}
          </Box>
        
        </Stack>
      </Box>
    </div>
  );
};

export default Products;

function ProductSimple({image, title, price}) {
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
         c
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"contain"}
            src={image}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {title}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              ₹{price}
            </Text>
            <Text textDecoration={"line-through"} color={"gray.600"}>
              $199
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
