import TodoFormComponent from "@/components/todos/form/TodoFormComponent";
import TodoList from "@/components/todos/list/TodoList";
import { Box, Flex, Heading } from "@chakra-ui/react";

function TodoPage() {
  return (
    <Box py={"12px"} width={"full"}>
      <Flex
        gap={2}
        minH={"90vh"}
        divideX={"4px"}
        flexDirection={["column", "column", "row"]}
      >
        <Box gap={4} maxW={["100%", "100%", "50%"]} width={"full"} p={4}>
          <Heading as={"h2"}>Add a task</Heading>
          <TodoFormComponent />
        </Box>
        <TodoList />
      </Flex>
    </Box>
  );
}

export default TodoPage;
