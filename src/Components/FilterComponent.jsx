import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { fetchData } from "../Redux/products/action";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import { Text, Checkbox, CheckboxGroup, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
const FilterComponents = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  console.log(searchParams.getAll("category"));

  const [categoryValues, setCategoryValues] = useState(
    searchParams.getAll("category") || []
  );
  const categoryHandler = (values) => {
    // console.log(values);
    setCategoryValues(values);
  };

  useEffect(() => {
    if (categoryValues) {
      setSearchParams({ category: categoryValues });
      let params = {
        category: searchParams.getAll("category"),
      };
      dispatch(fetchData(params));
    }
  }, [categoryValues, dispatch, searchParams, setSearchParams]);

  return (
    <Box>
      <Box display={{ base: "none", md: "block" }}>
        <Text fontSize="2xl">Filters</Text>
        <Text>Category</Text>
        <CheckboxGroup
          colorScheme="green"
          defaultValue={categoryValues}
          onChange={categoryHandler}
        >
          <VStack alignItems={"baseline"}>
            <Checkbox value="men's clothing">Mens Clothing</Checkbox>
            <Checkbox value="women's clothing">Womens clothig</Checkbox>
            <Checkbox value="jewelery">Jewelery</Checkbox>
            <Checkbox value="electronics">Eletronics</Checkbox>
            <Checkbox value="bags">Bags</Checkbox>
          </VStack>
        </CheckboxGroup>
      </Box>
      <Box display={{ base: "block", md: "none" }} p="0rem 2rem">
        <Menu closeOnSelect={false}>
          <MenuButton as={Button} colorScheme="blue">
            MenuItem
          </MenuButton>
          <MenuList minWidth="240px">
            <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
              <MenuItemOption value="asc">Ascending</MenuItemOption>
              <MenuItemOption value="desc">Descending</MenuItemOption>
            </MenuOptionGroup>
            <MenuDivider />
            <MenuOptionGroup title="Country" type="checkbox">
              <MenuItemOption value="email">Email</MenuItemOption>
              <MenuItemOption value="phone">Phone</MenuItemOption>
              <MenuItemOption value="country">Country</MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
};

export default FilterComponents;
