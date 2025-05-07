import { configureStore } from '@reduxjs/toolkit'

import todosReduer from './features/todos/todosSlice'

export const store = configureStore({
  reducer: {
    todos: todosReduer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch