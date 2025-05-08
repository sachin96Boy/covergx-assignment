import type { AppDispatch, RootState } from "@/store";
import { Flex, Spinner, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "../todo/Todo";
import { useEffect } from "react";
import { getAlltodos } from "@/features/todos/todosAction";

function TodoList() {
  const dispatch = useDispatch<AppDispatch>();

  const { loading, message, error, todos } = useSelector(
    (state: RootState) => state.todos
  );

  useEffect(() => {
    dispatch(getAlltodos({}));
  }, [dispatch]);

  return (
    <Flex
      alignItems={"center"}
      justifyContent={"start"}
      flexDirection={"column"}
      gap={4}
      p={4}
      overflowY={"auto"}
      //   minH={"100vh"}
    >
      {loading ? (
        <Spinner />
      ) : error ? (
        <Text>{message}</Text>
      ) : todos.length === 0 ? (
        <Text>No todos found</Text>
      ) : (
        todos.map((todo) => {
          return <Todo key={todo.id} data={todo} />;
        })
      )}
    </Flex>
  );
}

export default TodoList;
