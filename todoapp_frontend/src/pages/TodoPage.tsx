import TodoFormComponent from "@/components/todos/form/TodoFormComponent";
import TodoList from "@/components/todos/list/TodoList";
import { Box, Flex } from "@chakra-ui/react";

function TodoPage() {
  return (
    <Box minH={"100vh"} width={"full"} overflowY={"auto"}>
      <Flex divideX={"2px"} flexDirection={["column", "column", "row"]}>
        <TodoFormComponent />
        <TodoList />
      </Flex>
    </Box>
  );
}

export default TodoPage;
