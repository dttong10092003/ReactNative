import { configureStore } from '@reduxjs/toolkit';
import bikeReducer from './slices/bikeSlice';

const store = configureStore({
  reducer: {
    bike: bikeReducer,
  },
});

export default store;
