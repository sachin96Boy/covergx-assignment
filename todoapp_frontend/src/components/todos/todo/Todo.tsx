import { updateTodo } from "@/features/todos/todosAction";
import type { Itodo } from "@/features/todos/todosSlice";
import type { AppDispatch } from "@/store";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

type ITodoProps = {
  data: Itodo;
};

function Todo(props: ITodoProps) {
  const { data } = props;

  const dispatch = useDispatch<AppDispatch>();

  const handleComplete = async () => {
    await dispatch(
      updateTodo({
        id: data.id,
        title: data.title,
        description: data.content,
        completed: true,
      })
    );
  };

  return (
    <Box minW={"600px"}>
      <Box p={4} borderWidth={1} borderRadius="md" mb={2} bg={"gray.200"}>
        <Box fontWeight="bold">
          <Heading>{data.title}</Heading>
        </Box>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Box>{data.content}</Box>
          {!data.completed ? (
            <Button
              colorPalette="black"
              variant={"outline"}
              outline={"1px solid black"}
              ml={2}
              onClick={handleComplete}
            >
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
