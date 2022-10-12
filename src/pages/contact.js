import {
  Box,
  Grid,
  Flex,
  Text,
  GridItem,
  Image,
  SimpleGrid,
  Spacer,
  Link,
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import NavBarHome from "../components/navBarHome";

export default function About() {
  return (
    <Flex bg="brand.100" h={"5xl"}>
      <Box padding="4">
        <NavBarHome />
      </Box>
      <Grid
        templateRows="repeat(6, 1fr)"
        templateColumns="repeat(2,1fr)"
        gap={6}
        h="500px"
      >
        <GridItem
          rowStart={7}
          rowEnd={7}
          colStart={1}
          colEnd={1}
          fontFamily={"EB Garamond"}
          fontSize={"9xl"}
        >
          Hello.
        </GridItem>
        <GridItem
          rowStart={8}
          rowEnd={8}
          colStart={1}
          colEnd={1}
          fontFamily={"sans-serif"}
          fontWeight={"thin"}
          fontSize={"3xl"}
        >
          Connect with me online
        </GridItem>
        <GridItem
          rowStart={9}
          rowEnd={10}
          colStart={1}
          colEnd={3}
          fontFamily={"sans-serif"}
          fontWeight={"thin"}
          fontSize={"xl"}
          alignContent={"end"}
        >
          <b> Email: </b>{" "}
          <Link href="mailto:1014meng@gmail.com">
            1014meng@gmail.com
          </Link>
          <b> Social media: </b>{" "}
          <Link href="http://github.com/gmengqi" isExternal>
            {" "}
            Github{" "}
          </Link>
          ,{" "}
          <Link href="https://linkedin.com/in/mengqi-gao" isExternal>
            LinkedIn{" "}
          </Link>
          , Instagram
        </GridItem>
      </Grid>
    </Flex>
  );
}
