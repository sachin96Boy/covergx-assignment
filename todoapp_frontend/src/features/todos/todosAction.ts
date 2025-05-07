/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosInstance } from "@/api-utils/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type {  ICreatetodo, IUpdatetodo } from "./todosSlice";

const handleGetAllTodos = async ({ rejectWithValue }: any) => {
    try {

        const response = await axiosInstance.get('/todos');

        return response.data;

    } catch (err) {
        return rejectWithValue(err)
    }
}

const handleCreateTodos = async (values: ICreatetodo, { rejectWithValue }: any) => {
    try {

        const response = await axiosInstance.post('/todos', values);

        return response.data;

    } catch (err) {
        return rejectWithValue(err)
    }
}

const handleUpdateTodo = async (values: IUpdatetodo, { rejectWithValue }: any) => {
    try {

        const response = await axiosInstance.put(`/todos/${values.id}`, values);

        return response.data;

    } catch (err) {
        return rejectWithValue(err)
    }
}


const getAlltodos = createAsyncThunk('todos/getAllTodos', handleGetAllTodos);
const createTodo = createAsyncThunk('todos/createtodos', handleCreateTodos);
const updateTodo = createAsyncThunk('todos/updatetodos', handleUpdateTodo);

export {
    getAlltodos,
    createTodo,
    updateTodo
}