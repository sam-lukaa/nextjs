import { Box, Heading, HStack } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { useRadio, useRadioGroup } from "@chakra-ui/react";

function RadioCard(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label" textAlign="center" margin="auto">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        // borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        color="gray.500"
        _selection={{ color: "white", bg: "gray.500" }}
        _hover={{
          bg: "teal.400",
          boxShadow: "lg",
          color: "white",
          fontWeight: "bold",
        }}
        _checked={{
          bg: "teal.600",
          color: "white",
          fontWeight: "bold",
        }}
        _focus={{
          fontWeight: "bold",
        }}
        p={2}
      >
        {props.children}
      </Box>
    </Box>
  );
}

export default function Select({ optionsValue }) {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "react",
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {optionsValue.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
}
