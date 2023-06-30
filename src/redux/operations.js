import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://myfakeapi.com/api/';

export const fetchCars = createAsyncThunk('cars/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/cars');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteCar = createAsyncThunk('cars/deleteOne', async (id, thunkAPI) => {
  try {
    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const editCar = createAsyncThunk('cars/edit', (credential, thunkAPI) => {
  try {
    return credential;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
