import { getAlltodos } from "@/features/todos/todosAction";
import type { AppDispatch, RootState } from "@/store";
import Error from "@/utils/Error";
import { Center, Flex, Spinner, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "../todo/Todo";

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
        <Center>
          <Spinner />
        </Center>
      ) : error ? (
        <Error message={message} />
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
