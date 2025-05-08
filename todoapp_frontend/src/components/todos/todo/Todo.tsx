import { updateTodo } from "@/features/todos/todosAction";
import type { IUpdatetodo } from "@/features/todos/todosSlice";
import type { AppDispatch } from "@/store";
import { Box, Button, Flex } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

type ITodoProps = {
  data: IUpdatetodo;
};

function Todo(props: ITodoProps) {
  const { data } = props;

  const dispatch = useDispatch<AppDispatch>();

  const handleComplete = async () => {
    await dispatch(
      updateTodo({
        id: data.id,
        title: data.title,
        description: data.description,
        completed: true,
      })
    );
  };

  return (
    <Box>
      <Box p={4} borderWidth={1} borderRadius="md" mb={2}>
        <Box fontWeight="bold">{data.title}</Box>
        <Flex>
          <Box>{data.description}</Box>
          {!data.completed ? (
            <Button colorScheme="blue" ml={2} onClick={handleComplete}>
              Complete
            </Button>
          ) : (
            <Box />
          )}
        </Flex>
      </Box>
    </Box>
  );
}

export default Todo;
