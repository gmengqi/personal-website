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
           
          </GridItem>

          <GridItem rowStart={2} rowEnd={3} colStart={2} colEnd={3} h="4">
          
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
              Created a Telegram bot for ORCABAKES, an interest group in
              Residential College 4! The bot was used for the residents to place
              orders when ORCABAKES is having bake sales and to automate the
              signing up of sessions so as to make keep track of attendence
              easier! <Spacer />
              <Link href="https://t.me/orcabakes_bot" isExternal>
                <b> Cick here to try the bot! </b>
              </Link>
            </Text>
          </GridItem>
        </Grid>
      </Flex>
    </>
  );
}
