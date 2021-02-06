import { Box, Heading, Text } from "@chakra-ui/react";
import Select from "./select";

export default function Sidebar() {
  // const styles = {
  //   height: "100%",
  //   width: "30%",
  //   right: "0",
  //   top: "11%",
  //   position: "fixed",
  //   overflow: "hidden",
  //   borderLeft: "solid 1px #3333",
  // };

  const styles = {
    height: "100%",
    width: "33%",
    display: "block",
    position: "fixed",
    right: "0",
    overflow: "hidden",
    // paddingRight: "6%",
    borderLeft: "1px solid #0033",
  };

  const body = {
    padding: "1rem",
  };

  return (
    <div style={styles}>
      <Box textAlign="center">
        <Heading
          size="md"
          shadow="md"
          p="4"
          color="gray.500"
          _selection={{ color: "white", bg: "gray.500" }}
        >
          PREFERENCES
        </Heading>

        <div style={body}>
          <Text
            fontSize="md"
            fontWeight="bold"
            mb="2"
            color="gray.500"
            _selection={{ color: "white", bg: "gray.500" }}
          >
            Choose mode of work
          </Text>
          <Select optionsValue={["Remote", "Office"]} />
        </div>
      </Box>
    </div>
  );
}
