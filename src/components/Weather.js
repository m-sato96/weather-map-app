import React from "react";

import { Flex, Box, Text, Stack } from "@chakra-ui/react";
import { WiDaySunny, WiCloudy, WiHail, WiShowers } from "react-icons/wi";
const Weather = () => {
  return (
    <Box h={`calc(100vh - ${80}px)`}>
      <Box position="relative" h="100%" p={5} width="100%" maxWidth="650px" marginX="auto" textAlign="right">
        <Box position="absolute" bottom="100px" right="40px">
          <Stack spacing={1}>
            <Flex justifyContent="flex-end">
              <WiDaySunny size={60} marginLeft="color" />
            </Flex>
            <Text as="b" fontSize="60px">
              晴れ
            </Text>
            <Text as="b" fontSize="18px">
              Tokyo
            </Text>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Weather;
