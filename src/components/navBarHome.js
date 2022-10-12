import { Text, Grid, Link } from "@chakra-ui/react";

export default function NavBarHome() {
  return (
    <>
      <Grid templateRow="repeat(3, 1fr)" gap={10} bg="brand.100">
        <Link href="/">
          <Text
            fontFamily="sans-serif"
            fontSize={"md"}
            color="black"
            fontWeight={"thin"}
          >
            Home
          </Text>
        </Link>
      </Grid>
    </>
  );
}
