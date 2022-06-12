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
import { Link } from "react-router-dom";

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
        <MenuList zIndex={1000}>
          <Link to="/cart">
            <MenuItem>Cart </MenuItem>
          </Link>

          <Link to="/orders">
            <MenuItem>Your Orders</MenuItem>
          </Link>
          <Link to="/login">
            <MenuItem>Login</MenuItem>
          </Link>
          <Link to="/logout">
            <MenuItem>LogOut</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Profile;
