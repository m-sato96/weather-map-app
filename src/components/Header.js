import React from "react";
import { Box, Flex, Input, Button, InputLeftElement, InputGroup } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { ImLocation, ImSearch } from "react-icons/im";
const Header = () => {
  return (
    <Box p={5} maxWidth="550px" marginX="auto">
      <Flex direction="row" justifyContent="space-between" alignItems="center">
        <InputGroup width={`calc(100% - ${90}px)`} bg="white" borderRadius="6px">
          <InputLeftElement pointerEvents="none" children={<Icon as={ImLocation} color="gray.300" />} />
          <Input type="text" placeholder="tokyo" />
        </InputGroup>
        <Button size="sm" fontSize="sm" leftIcon={<Icon as={ImSearch} />} colorScheme="teal" variant="solid">
          検索
        </Button>
      </Flex>
    </Box>
  );
};

export default Header;
