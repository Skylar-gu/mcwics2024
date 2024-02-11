import { IconButton, Button } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import React from "react";
import { useDisclosure } from "@chakra-ui/react";


function MenuButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
    <IconButton
      isRound={true}
      variant="solid"
      colorScheme="teal"
      aria-label="Done"
      fontSize="20px"
      icon={<HamburgerIcon />}
      boxShadow={"md"}
      onClick={onOpen}
    />
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>Menu</DrawerHeader>

          <DrawerBody>
            <Button variant='outline'>
              About
            </Button>
          </DrawerBody>

          <DrawerFooter>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

    </>
  );
}

export default MenuButton;