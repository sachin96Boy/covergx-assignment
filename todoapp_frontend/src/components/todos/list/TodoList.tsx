import type { RootState } from "@/store";
import { Flex, Spinner, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Todo from "../todo/Todo";

function TodoList() {
  const { loading, message, error, todos } = useSelector(
    (state: RootState) => state.todos
  );
  return (
    <Flex alignItems={"center"} justifyContent={"center"} p={4}>
      {loading ? (
        <Spinner />
      ) : error ? (
        <Text>{message}</Text>
      ) : todos.length === 0 ? (
        <Text>No todos found</Text>
      ) : (
        todos.map((todo) => <Todo key={todo.id} data={todo} />)
      )}
    </Flex>
  );
}

export default TodoList;
