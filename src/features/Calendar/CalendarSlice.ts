import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchData = createAsyncThunk('calendar/fetchData', async () => {
  try {
    const response = await fetch("./data/Calendar.json");
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Erreur lors de la récupération des données du calendrier", error);
    return null;
  }
});

const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    data: null,
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});


export default calendarSlice.reducer;
export { fetchData };
