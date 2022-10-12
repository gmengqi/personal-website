import { Text, Grid, Link } from "@chakra-ui/react";
import pdf from "../resume.pdf";

export default function NavBar() {
  return (
    <>
      <Grid templateRow="repeat(3, 1fr)" gap={10} bg="brand.100">
        <Link href="https://linkedin.com/in/mengqi-gao" isExternal>
          <Text
            fontFamily="sans-serif"
            fontSize={"md"}
            color="black"
            fontWeight={"thin"}
          >
            LinkedIn
          </Text>
        </Link>
        <Link href="https://github.com/gmengqi" isExternal>
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
        <Link as="a" href={pdf} target="_blank"> 
        <Text
          align={"center"}
          fontFamily="sans-serif"
          fontSize={"md"}
          color="black"
          fontWeight={"thin"}
        >
          Resume
        </Text>
        </Link>
      </Grid>
    </>
  );
}
