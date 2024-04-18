import { Box, Flex, Text, Button, Input, useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon, FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const color = useColorModeValue("black", "white");

  return (
    <Flex direction="column" align="center" justify="center" minH="100vh" bg={bgColor} color={color} p={4}>
      <IconButton aria-label="Toggle theme" icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} mb={4} size="lg" />
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
        <Text mb={4}>Customizable Box</Text>
        <Flex gap={2}>
          <Input placeholder="Type here..." />
          <Button leftIcon={<FaPlus />} colorScheme="blue">
            Add
          </Button>
          <Button leftIcon={<FaTrash />} colorScheme="red">
            Remove
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Index;
