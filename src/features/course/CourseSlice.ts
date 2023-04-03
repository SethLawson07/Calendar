import { createSlice } from '@reduxjs/toolkit';



const initialState = {
  courses: [
  
  ],
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    addCourse: (state, action) => {
      const { id, name, price } = action.payload;
     
      state.courses.push({ id, name, price });
    },
    deleteCourse: (state, action) => {
      const id = action.payload;
      state.courses = state.courses.filter(course => course.id !== id);
    },
  },
});

export const { addCourse,  deleteCourse } = coursesSlice.actions;
export default coursesSlice.reducer;

