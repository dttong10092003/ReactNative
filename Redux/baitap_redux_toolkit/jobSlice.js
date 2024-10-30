// jobSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://671341686c5f5ced6625d06c.mockapi.io/api/todo';

// Thunks cho các tác vụ bất đồng bộ
export const fetchJobs = createAsyncThunk('job/fetchJobs', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const addJob = createAsyncThunk('job/addJob', async (job) => {
  const response = await axios.post(API_URL, job);
  return response.data;
});

export const editJob = createAsyncThunk('job/editJob', async (job) => {
  const response = await axios.put(`${API_URL}/${job.id}`, job);
  return response.data;
});

export const deleteJob = createAsyncThunk('job/deleteJob', async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

// Slice chứa các reducers và actions cho job
const jobSlice = createSlice({
  name: 'job',
  initialState: {
    jobs: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchJobs
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // addJob
      .addCase(addJob.fulfilled, (state, action) => {
        state.jobs.push(action.payload);
      })

      // editJob
      .addCase(editJob.fulfilled, (state, action) => {
        const index = state.jobs.findIndex((job) => job.id === action.payload.id);
        if (index !== -1) {
          state.jobs[index] = action.payload;
        }
      })

      // deleteJob
      .addCase(deleteJob.fulfilled, (state, action) => {
        state.jobs = state.jobs.filter((job) => job.id !== action.payload);
      });
  },
});

export default jobSlice.reducer;
