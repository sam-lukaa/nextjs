import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react";

export default function Navbar() {
  const styles = {
    navbar: {
      position: "sticky",
      top: "0",
      color: "wheat",
      width: "100%",
      borderBottom: "1px solid #3333",
      // marginBottom: "2rem",
    },
  };
  return (
    <div style={styles.navbar}>
      <Flex p={4} alignItems="baseline" bg="white">
        <Box>
          <Heading
            size="md"
            color="gray.500"
            _selection={{ color: "white", bg: "gray.500" }}
          >
            HelperDev
          </Heading>
        </Box>
        <Spacer />
        <Box>
          <Button
            bg="teal.400"
            color="white"
            _hover={{ bg: "teal.600", boxShadow: "lg" }}
            _active={{ bg: "white", color: "teal.600" }}
            mr={4}
          >
            Junior Dev
          </Button>

          <Button
            bg="teal.400"
            color="white"
            _hover={{ bg: "teal.600", boxShadow: "lg" }}
            _active={{ bg: "white", color: "teal.600" }}
            mr={4}
          >
            Senior Dev
          </Button>
        </Box>
      </Flex>
    </div>
  );
}
