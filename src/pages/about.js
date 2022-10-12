import {
  Box,
  Grid,
  Flex,
  Text,
  GridItem,
  Image,
  Spacer,
  Heading,
} from "@chakra-ui/react";
import me from "../images/me.jpg";
import NavBarHome from "../components/navBarHome";

export default function About() {
  return (
    <Flex bg="brand.100" h={"5xl"}>
      <Box padding="4">
        <NavBarHome />
      </Box>
      <Grid
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(6,1fr)"
        gap={6}
        h="500px"
      >
        <GridItem rowStart={2} rowEnd={3} colStart={2} colEnd={5} h="3">
          <Heading fontFamily={"EB Garamond"} fontSize="8xl">
            {" "}
            About{" "}
          </Heading>
          <Text>
            {" "}
            Hi! Good to see you here :) <Spacer /> I am <b> mengqi</b>, a year 2
            computer science student studying in National University of
            Singapore!
          </Text>

          <Text>
            I am interested in designing and web development and am currently
            learning html and css to improve my skills!
          </Text>

          <Text>
            Apart from coding projects and academic, I have started on many
            crochet projects where I design and crochet bags and soft toys to
            unwind as well!
          </Text>
          <Text>
            {" "}
            <b> Leadership exp</b>: Publicity head for orcabakes and secretary
            for rc4fe <Spacer />
            <b> Skills </b>: Postgresql, Java, Reactjs, C
          </Text>
          <Spacer />
        </GridItem>
        <GridItem
          as={Image}
          src={me}
          rowStart={3}
          rowEnd={3}
          colStart={5}
          colEnd={7}
          h="450px"
        />
      </Grid>
    </Flex>
  );
}
