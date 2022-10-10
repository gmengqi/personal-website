import {
  Text,
  Flex,
  Center,
  Spacer,
  VStack,
  Grid,
  Button,
  Box,
  Divider,
  Image,
  HStack,
  Stack,
  Heading,
  GridItem,
} from "@chakra-ui/react";
import NavBar from "../components/navBar";

export default function LandingPage() {
  return (
    <>
      <Flex bg="brand.100" h={"4xl"}>
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
            h="1"
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
            colEnd={1}
            h="1"
          >
            Computer Science Undergraduate in National Unversity of Singapore
            and a crochet queen
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
            WORK
          </GridItem>
          <GridItem
            fontFamily={"EB Garamond"}
            fontSize={"9xl"}
            rowStart={3}
            rowEnd={4}
            colStart={2}
            colEnd={5}
            h="1"
            bg="brand.100"
          >
            ABOUT
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
            CONTACT
          </GridItem>
        </Grid>
      </Flex>
    </>
  );
}
