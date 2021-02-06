import {
  Avatar,
  Badge,
  Box,
  Flex,
  Grid,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";

export default function Card({ companyName, location, mode, description, name, position }) {
  const styles = {
    width: "60%",
    display: "inline-block",
    marginLeft: "4%",
  };
  return (
    <div style={styles}>
      <Flex m="auto" mt="2">
        <Box boxShadow="md" p={4} m="auto">
          <Grid>
            <Flex alignItems="center" mb="4">
              <Text mr="16">Company Logo</Text>
              <Heading fontSize="lg">{companyName}</Heading>
            </Flex>

            <Grid mb="3">
              <Heading fontSize="lg" mr="1">
                Location
              </Heading>
              <Text>{location}</Text>
            </Grid>

            <Grid mb="3">
              <Heading fontSize="lg" mr="1">
                Job mode
              </Heading>
              <Text>{mode}</Text>
            </Grid>

            <Grid>
              <Heading fontSize="lg" mr="1">
                Job description
              </Heading>
              <Text isTruncated noOfLines={2}>
                {description}
              </Text>
            </Grid>
          </Grid>

          <Flex mt={4} justify="space-around" alignItems="center">
            <Box>
              <Flex>
                <Avatar src="https://bit.ly/sage-adebayo" />
                <Box ml="3">
                  <Text fontWeight="bold">{name}</Text>
                  <Text fontSize="sm">{position}</Text>
                </Box>
              </Flex>
            </Box>
            <Box>
              <Link
                background="teal.500"
                p={2}
                borderRadius="md"
                color="white"
                fontWeight="bold"
              >
                Link to information{" "}
              </Link>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
}
