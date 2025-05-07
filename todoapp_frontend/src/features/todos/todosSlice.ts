/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { createTodo, getAlltodos, updateTodo } from "./todosAction";

export type ICreatetodo = {
    title: string;
    description: string;
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
    todos: IUpdatetodo[];
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

                state.todos = action.payload.todos;
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

                state.todos = [...state.todos, action.payload.todo]
            }
        ).addCase(
            createTodo.rejected,
            (state, action) => {
                state.loading = false;
                state.error = true;
                state.success = false;

                state.message = (action.payload as any)?.message || 'Something went wrong!'


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

                const index = state.todos.findIndex((todo) => todo.id === action.payload.todo.id)

                if (index !== -1) {
                    state.todos[index] = action.payload.todo
                }
            }
        ).addCase(
            updateTodo.rejected,
            (state, action) => {
                state.loading = false;
                state.error = true;
                state.success = false;

                state.message = (action.payload as any)?.message || 'Something went wrong!'


            }
        )

    },
});

export default todosSlice.reducer;