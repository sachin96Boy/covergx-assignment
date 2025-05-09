/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { createTodo, getAlltodos, updateTodo } from "./todosAction";
import { toaster } from "@/components/ui/toaster";

export type ICreatetodo = {
    title: string;
    description: string;
    completed: boolean;
}
export type Itodo = {
    id: number;
    title: string;
    content: string;
    completed: boolean;
}
export type IUpdatetodo = {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

export type IinitialState = {
    loading: boolean;
    todos: Itodo[];
    error: boolean | null;
    success: boolean;
    message: string | null;
}

const initialState: IinitialState = {
    loading: false,
    todos: [],
    error: null,
    success: false,
    message: null,
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {

        builder.addCase(
            getAlltodos.pending,
            (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            }
        ).addCase(
            getAlltodos.fulfilled,
            (state, action) => {
                state.loading = false;
                state.error = null;
                state.success = true;

                state.todos = action.payload;
            }
        ).addCase(
            getAlltodos.rejected,
            (state, action) => {
                state.loading = false;
                state.error = true;
                state.success = false;

                state.message = (action.payload as any)?.message || 'Something went wrong!'


            }
        ).addCase(
            createTodo.pending,
            (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            }
        ).addCase(
            createTodo.fulfilled,
            (state, action) => {
                state.loading = false;
                state.error = null;
                state.success = true;

                state.todos = [...state.todos, action.payload]

                toaster.create({
                    type: 'success',
                    title: 'Todo created successfully',

                });
            }
        ).addCase(
            createTodo.rejected,
            (state, action) => {
                state.loading = false;
                state.error = true;
                state.success = false;

                state.message = (action.payload as any)?.message || 'Something went wrong!'

                toaster.create({
                    type: 'error',
                    title: state.message || 'Something went wrong',

                });


            }
        ).addCase(
            updateTodo.pending,
            (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            }
        ).addCase(
            updateTodo.fulfilled,
            (state, action) => {
                state.loading = false;
                state.error = null;
                state.success = true;

                state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);

                toaster.create({
                    type: 'success',
                    title: 'Todo updated successfully',

                });

            }
        ).addCase(
            updateTodo.rejected,
            (state, action) => {
                state.loading = false;
                state.error = true;
                state.success = false;

                state.message = (action.payload as any)?.message || 'Something went wrong!'

                toaster.create({
                    type: 'error',
                    title: state.message || 'Something went wrong',

                });



            }
        )

    },
});

export default todosSlice.reducer;