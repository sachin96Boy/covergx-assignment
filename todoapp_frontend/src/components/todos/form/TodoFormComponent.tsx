import { createTodo } from "@/features/todos/todosAction";
import type { ICreatetodo } from "@/features/todos/todosSlice";
import type { AppDispatch } from "@/store";
import { Button, Field, Input, Stack, Textarea } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import * as yup from "yup";

function TodoFormComponent() {
  const dispatch = useDispatch<AppDispatch>();

  const initialValues: ICreatetodo = {
    title: "",
    description: "",
    completed: false,
  };

  const validationSchema = yup.object().shape({
    title: yup.string().required("Title is required"),
    description: yup.string().required("Description is required"),
    completed: yup.boolean().defined().default(false),
  });

  const handleDataSubmit = async (values: ICreatetodo) => {
    await dispatch(createTodo(values));
    reset(initialValues);
  };

  const {
    register,
    handleSubmit,
    reset,

    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
    mode: "onBlur",
    reValidateMode: "onBlur",
    shouldUnregister: true,
    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: "firstError",
    delayError: 0,
  });

  return (
    <form onSubmit={handleSubmit(handleDataSubmit)}>
      <Stack spaceY={4} align={"flex-start"} maxW={"lg"}>
        <Field.Root invalid={!!errors.title}>
          <Field.Label>Title</Field.Label>
          <Input {...register("title")} />
          <Field.ErrorText>{errors.title?.message}</Field.ErrorText>
        </Field.Root>
        <Field.Root invalid={!!errors.description}>
          <Field.Label>Description</Field.Label>
          <Textarea {...register("description")} />
          <Field.ErrorText>{errors.description?.message}</Field.ErrorText>
        </Field.Root>
        <Button
          alignSelf={"end"}
          colorPalette={"blue"}
          loading={isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </Stack>
    </form>
  );
}

export default TodoFormComponent;
