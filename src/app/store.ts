import { configureStore } from '@reduxjs/toolkit'
import CourseSlice from '../features/course/CourseSlice'
import CalendarSlice from '../features/Calendar/CalendarSlice'

export const store = configureStore({
  reducer: {
    course:CourseSlice,
    calendar:CalendarSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch