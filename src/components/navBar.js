import {
  Text,
  Flex,
  Center,
  Spacer,
  VStack,
  Grid,
  Button,
  Box,
  Divider,Link,
  Image,
  GridItem, 
} from "@chakra-ui/react";

export default function NavBar() {
  return (
    <>
      <Grid templateRow="repeat(2, 1fr)" gap={10} bg="brand.100">
        <Link href='https://linkedin.com/in/mengqi-gao' isExternal>
          <Text
            fontFamily="sans-serif"
            fontSize={"md"}
            color="black"
            fontWeight={"thin"}
          >
            LinkedIn
          </Text>
        </Link>
        <Link href='https://github.com/gmengqi' isExternal>
          <Text
            align={"center"}
            fontFamily="sans-serif"
            fontSize={"md"}
            color="black"
            fontWeight={"thin"}
          >
            GitHub
          </Text>
        </Link>
      </Grid>
    </>
  );
}
