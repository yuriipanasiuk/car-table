import { createSlice } from '@reduxjs/toolkit';
import { deleteCar, editCar, fetchCars } from './operations';

const carsSlice = createSlice({
  name: 'carsSlice',
  initialState: {
    items: [],
  },
  extraReducers: builder =>
    builder
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.items = action.payload.cars;
      })
      .addCase(deleteCar.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      })
      .addCase(editCar.fulfilled, (state, action) => {
        const { id, values } = action.payload;
        const itemIndex = state.items.findIndex(item => item.id === id);
        if (itemIndex !== -1) {
          state.items[itemIndex] = { ...state.items[itemIndex], ...values };
        }
      }),
});

export const carsReducer = carsSlice.reducer;
