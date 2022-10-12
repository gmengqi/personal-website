import { Flex, Grid, Box, GridItem, Link, Spacer } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import NavBar from "../components/navBar";

export default function LandingPage() {
  return (
    <>
      <Flex bg="brand.100" h={"5xl"}>
        <Box padding="4">
          <NavBar />
        </Box>

        <Grid
          templateRows="repeat(3, 1fr)"
          templateColumns="repeat(3,1fr)"
          gap={6}
          h="500px"
        >
          <GridItem
            fontSize={"3xl"}
            fontFamily={"EB Garamond"}
            rowStart={4}
            rowEnd={4}
            colStart={1}
            colEnd={1}
            h="2"
          >
            GAO MENGQI
          </GridItem>

          <GridItem
            fontSize={"md"}
            fontFamily={"sans-serif"}
            fontWeight={"thin"}
            rowStart={6}
            rowEnd={6}
            colStart={1}
            colEnd={2}
            h="2"
          >
            Interested in web development and crochet <Spacer />
            Currently studying Computer Science in National University of
            Singapore
          </GridItem>

          <GridItem
            fontFamily={"EB Garamond"}
            fontSize={"9xl"}
            rowStart={2}
            rowEnd={5}
            colStart={2}
            colEnd={4}
            h="2"
            bg="brand.100"
          >
            <Link as={ReachLink} to="/work">
              WORK
            </Link>
          </GridItem>

          <GridItem
            fontFamily={"EB Garamond"}
            fontSize={"9xl"}
            rowStart={3}
            rowEnd={4}
            colStart={2}
            colEnd={5}
            h="2"
            bg="brand.100"
          >
            <Link as={ReachLink} to="/about">
              ABOUT
            </Link>
          </GridItem>
          <GridItem
            fontFamily={"EB Garamond"}
            fontSize={"9xl"}
            rowStart={4}
            rowEnd={5}
            colStart={2}
            colEnd={5}
            h="2"
            bg="brand.100"
          >
            <Link as={ReachLink} to="/contact">
              CONTACT
            </Link>
          </GridItem>
        </Grid>
      </Flex>
    </>
  );
}
