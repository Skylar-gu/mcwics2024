import Logo from "./logo";
import MenuButton from "./menu-button";
import Search from "./search";
import { Flex, Spacer } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

function Header() {
  return (
    <Flex p="5">
      <Logo />
      <Spacer />
      <Search />
      <Spacer />
      <Box w="15px" />
      <MenuButton />
    </Flex>
  );
}

export default Header;