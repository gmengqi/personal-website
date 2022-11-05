import {
  Flex,
  Grid,
  Box,
  GridItem,
  Link,
  Spacer,
  Text,
  Image,
  Center,
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import NavBarWork from "../components/navBarWork";
import WebApp from "../images/webapp logo.png";
import Dashboard from "../images/dashboard.png";

export default function HawkerTown() {
  return (
    <>
      <Flex bg="brand.100" h={"5xl"}>
        <Box padding="4">
          <NavBarWork />
        </Box>

        <Grid
          templateRows="repeat(3, 1fr)"
          templateColumns="repeat(3,1fr)"
          gap={6}
          h="500px"
        >
          <GridItem rowStart={2} rowEnd={3} colStart={1} colEnd={2} h="4">
            <Image src={WebApp} align="center" />
          </GridItem>

          <GridItem rowStart={2} rowEnd={3} colStart={2} colEnd={3} h="4">
            <Image src={Dashboard} align="center" />
          </GridItem>

          <GridItem
            fontSize={"md"}
            fontFamily={"sans-serif"}
            fontWeight={"thin"}
            rowStart={6}
            rowEnd={6}
            colStart={1}
            colEnd={4}
            h="2"
          >
            <Text padding={4} align={"left"}>
              Developed a web application, HawkerTown, with my partner during my
              year 1 summer break that aims to provide an one-stop platform for
              hawkers and suppliers to connect more seamlessly with various
              features such as marketplace, invoice management system and order
              management system <Spacer />
              <Link href="https://hawker-dream.vercel.app/" isExternal>
                <b> Cick here to view the website </b>
              </Link>
            </Text>
          </GridItem>
        </Grid>
      </Flex>
    </>
  );
}
