"use client";

import { Box, Flex, Heading } from "@chakra-ui/react";
import { IoIosCloseCircle } from "react-icons/io";

export type errorProps = {
  message: string | null;
};

export default function Error(props: errorProps) {
  const { message } = props;

  return (
    <Box textAlign="center" py={10} px={6}>
      <Box display="inline-block">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bg={"red.500"}
          rounded={"50px"}
          w={"55px"}
          h={"55px"}
          textAlign="center"
        >
          <IoIosCloseCircle color={"white"} />
        </Flex>
      </Box>
      <Heading as="h2" size="xl" mt={6} mb={2}>
        {message}
      </Heading>
    </Box>
  );
}
