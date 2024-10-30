// jobSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  jobs: [],
  loading: false,
  error: null,
};

const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    fetchJobsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchJobsSuccess: (state, action) => {
      state.loading = false;
      state.jobs = action.payload;
    },
    fetchJobsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteJobRequest: (state, action) => {},
    deleteJobSuccess: (state, action) => {
      state.jobs = state.jobs.filter((job) => job.id !== action.payload);
    },
    deleteJobFailure: (state, action) => {
      state.error = action.payload;
    },
    addJobRequest: (state, action) => {},
    addJobSuccess: (state, action) => {
      state.jobs.push(action.payload);
    },
    addJobFailure: (state, action) => {
      state.error = action.payload;
    },
    editJobRequest: (state, action) => {},
    editJobSuccess: (state, action) => {
      const index = state.jobs.findIndex((job) => job.id === action.payload.id);
      if (index !== -1) {
        state.jobs[index] = action.payload;
      }
    },
    editJobFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  fetchJobsRequest,
  fetchJobsSuccess,
  fetchJobsFailure,
  deleteJobRequest,
  deleteJobSuccess,
  deleteJobFailure,
  addJobRequest,
  addJobSuccess,
  addJobFailure,
  editJobRequest,
  editJobSuccess,
  editJobFailure,
} = jobSlice.actions;

export default jobSlice.reducer;
