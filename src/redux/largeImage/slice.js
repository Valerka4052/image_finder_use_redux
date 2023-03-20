import { createSlice } from '@reduxjs/toolkit';

export const myLargeImageSlice = createSlice({
  name: 'myLargeImage',
  initialState: '',
  reducers: {
    getLargeImage(state, action) {return state = action.payload},
  }
});

export const { getLargeImage } = myLargeImageSlice.actions;