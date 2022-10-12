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
        templateColumns="repeat(6,1fr)"
        gap={6}
        h="500px"
      >
        <GridItem
          rowStart={7}
          rowEnd={7}
          colStart={1}
          colEnd={1}
          fontFamily={"EB Garamond"}
          fontSize={"3xl"}
        >
          <Text align={"left"}>Projects</Text>
        </GridItem>
        <GridItem
          rowStart={8}
          rowEnd={8}
          colStart={1}
          colEnd={4}
          fontFamily={"sans-serif"}
          fontWeight={"thin"}
          fontSize={"md"}
        >
          <Text align={"left"}>
            This page features some of my projects I have embarked on during my
            free time! I'm learning and gaining new skills everyday and looking
            for new projects to do
          </Text>
        </GridItem>
        <GridItem
          rowStart={3}
          rowEnd={5}
          colStart={4}
          colEnd={5}
          fontFamily={"EB Garamond"}
          fontSize={"8xl"}
        >
          <Link as={ReachLink} to="/work/hawkertown">
            HawkerTown{" "}
          </Link>
        </GridItem>
        <GridItem
          rowStart={6}
          rowEnd={8}
          colStart={4}
          colEnd={5}
          fontFamily={"EB Garamond"}
          fontSize={"8xl"}
        >
          <Link as={ReachLink} to="/work/biggiebot">
            BiggieBot{" "}
          </Link>
        </GridItem>
      </Grid>
    </Flex>
  );
}
