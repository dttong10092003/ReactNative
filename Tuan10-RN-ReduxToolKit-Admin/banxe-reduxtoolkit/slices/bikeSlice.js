import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://671001f7a85f4164ef2cc4c3.mockapi.io/api/bike';

export const fetchBikes = createAsyncThunk('bike/fetchBikes', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const addBike = createAsyncThunk('bike/addBike', async (newBike) => {
   console.log("hahah")
  const response = await axios.post(API_URL, newBike);
  return response.data;
});

export const updateBike = createAsyncThunk('bike/updateBike', async ({ id, updatedData }) => {
  console.log("Updating bike with ID:", id); // Log kiểm tra ID
  const response = await axios.put(`${API_URL}/${id}`, updatedData);
  return response.data;
});

export const deleteBike = createAsyncThunk('bike/deleteBike', async (bikeId) => {
  await axios.delete(`${API_URL}/${bikeId}`);
  return bikeId;
});

const bikeSlice = createSlice({
  name: 'bike',
  initialState: {
    bikes: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBikes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBikes.fulfilled, (state, action) => {
        state.bikes = action.payload;
        state.loading = false;
      })
      .addCase(fetchBikes.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(addBike.fulfilled, (state, action) => {
        state.bikes.push(action.payload);
      })
      .addCase(updateBike.fulfilled, (state, action) => {
        const index = state.bikes.findIndex((bike) => bike.id === action.payload.id);
        if (index !== -1) {
          state.bikes[index] = action.payload;
        } else {
          console.error("Update failed: Bike not found in state.");
        }
      })
      .addCase(deleteBike.fulfilled, (state, action) => {
        state.bikes = state.bikes.filter((bike) => bike.id !== action.payload);
      });
  },
});

export default bikeSlice.reducer;
