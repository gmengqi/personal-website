import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  Text,
  useDisclosure,
  Link,
  Stack,
  IconButton,
  Spacer,
  Center,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";
import { Link as ReactRouterLink } from "react-router-dom";
import React from "react";

export default function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Center>
        <Spacer />
        <IconButton
          size="sm"
          w={"10px"}
          icon={<HamburgerIcon />}
          colorScheme={"red.700"}
          ref={btnRef}
          onClick={onOpen}
        >
          Open
        </IconButton>

        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />

            <DrawerBody>
              <Stack>
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Button
                  variant={"link"}
                  as={ReactRouterLink}
                  to="/menu"
                  bg={"white"}
                >
                  <Text fontSize={"xl"} color={"black"}> Menu </Text>
                </Button>
                <Button
                  variant={"link"}
                  as={ReactRouterLink}
                  to="/order"
                  bg={"white"}
                >
                  <Text fontSize={"xl"}  color={"black"} > About us </Text>
                </Button>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Center>
    </>
  );
}
