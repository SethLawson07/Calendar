import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchDanceData, fetchProgramData, formatDanceData, formatProgramData, displayData } from './CalendarData';

const fetchCalendarData = createAsyncThunk('calendar/fetchCalendarData', async () => {
  try {
    const danceData = await fetchDanceData();
    const programData = await fetchProgramData();
    const formattedDanceData = formatDanceData(danceData);
    const formattedProgramData = formatProgramData(programData, formattedDanceData);
    const data = displayData(formattedProgramData);

    return data; 
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
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCalendarData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCalendarData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload; 
      })
      .addCase(fetchCalendarData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default calendarSlice.reducer;
export { fetchCalendarData };
