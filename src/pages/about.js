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
        <GridItem rowStart={2} rowEnd={3} colStart={1} colEnd={5} h="3">
          <Heading fontFamily={"EB Garamond"} fontSize="8xl">
            {" "}
            About{" "}
          </Heading>

          <Text align={"left"} padding={4}>
            {" "}
            Hi! Happy to see you here :) I am <b> mengqi</b>, a year 2 computer science
            student currently studying in the National University of Singapore!
          </Text>

          <Text align={"left"} padding={4}>
            I have always been <b> interested in creating and designing</b>, from my old
            obsession with designing and having a perfect Instagram feed to my
            current obsession with coming up with new designs for me to crochet.
            I remember working on and designing my first summer web app website
            project and how excited and motivated I was to work on it every day.
            Also, I am attending a course to learn about HTML and CSS formally!
          </Text>

          <Text align={"left"} padding={4}>
            I believe strongly in enjoying my University life to the fullest
            while I still can so I have been actively trying out new things and
            new experiences while I am still at NUS. For instance, I have taken
            on <b> roles as publicity head and secretary</b> for my hostel's
            baking and cooking interest groups which allowed me to learn how to
            live independent (and not die...)! I joined my hostel's college
            students' event committee to learn and experience planning and
            executing large-scale college-wide events as well. Last but not
            least, I need to mention my newest obsession which is crochet!
          </Text>
          <Text align={"left"} padding={4}>
            TLDR: enjoys creating and designing and is interested in learning
            more about web development! some of my hobbies include crocheting,
            baking and planning events! some of the skills I have acquired from
            my two years in NUS include: Postgresql, Java, Reactjs, C
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
