import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Button,
  WrapItem,
  Avatar,
} from "@chakra-ui/react";

const Profile = () => {
  return (
    <Flex>
      <Menu>
        <MenuButton
          as={Button}
          rounded="full"
          variant="link"
          cursior="pointer"
          minW={0}
        >
          <WrapItem>
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          </WrapItem>
        </MenuButton>
        <MenuList>
          <MenuItem>Cart</MenuItem>
          <MenuItem>Your Orders</MenuItem>
          <MenuItem>Login</MenuItem>
          <MenuItem>LogOut</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Profile;
