import { createSlice } from '@reduxjs/toolkit';
import { addCar, deleteCar, editCar, fetchCars } from './operations';

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
      })
      .addCase(addCar.fulfilled, (state, action) => {
        const maxId = state.items.reduce((max, item) => (item.id > max ? item.id : max), 0);
        const newItem = { ...action.payload, id: maxId + 1 };
        state.items.push(newItem);
      }),
});

export const carsReducer = carsSlice.reducer;
