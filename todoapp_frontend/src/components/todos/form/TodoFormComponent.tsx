import type { ICreatetodo } from "@/features/todos/todosSlice";
import { Button, Field, Input, Stack, Textarea } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import * as yup from "yup";

function TodoFormComponent() {
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

  const handleDataSubmit = (values: ICreatetodo) => {
    console.log(values);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, touchedFields },
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
      <Stack gap={4} align={"flex-start"} maxW={"sm"}>
        <Field.Root invalid={!!errors.title || !!touchedFields.title}>
          <Field.Label>Title</Field.Label>
          <Input {...register("title")} />
          <Field.ErrorText>{errors.title?.message}</Field.ErrorText>
        </Field.Root>
        <Field.Root
          invalid={!!errors.description || !!touchedFields.description}
        >
          <Field.Label>Description</Field.Label>
          <Textarea {...register("description")} />
          <Field.ErrorText>{errors.description?.message}</Field.ErrorText>
        </Field.Root>
        <Button colorPalette={"blue"} loading={isSubmitting} type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  );
}

export default TodoFormComponent;
