import React, { useEffect } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../Redux/products/action";
import ProductSimple from "../Components/ProductSimple";

const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((store) => store.ecommerceData.orders);
  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);
  console.log(orders);
  return (
    <Box>
      <Heading as="h2" size="xl" textAlign={"center"}>
        Your Orders
      </Heading>
      <Box>
        {orders.map((product) => {
          return (
            <ProductSimple
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Orders;
