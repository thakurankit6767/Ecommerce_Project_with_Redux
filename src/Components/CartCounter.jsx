import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCart } from "../Redux/products/action";

const CartCounter = () => {
  const cart = useSelector((store) => store.ecommerceData.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cart?.length === 0) {
      dispatch(fetchCart());
    }
  }, [cart?.length, dispatch]);
  return (
    <Box
      backgroundColor="black"
      borderRadius="50%"
      width="20px"
      height="20px"
      textColor="white"
      textAlign="center"
      paddingBottom="20px"
      position="absolute"
      right="0"
      top="0"
    >
      {cart?.length ? cart.length : 0}
    </Box>
  );
};

export default CartCounter;
