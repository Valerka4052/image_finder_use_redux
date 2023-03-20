import { createSlice } from '@reduxjs/toolkit';

export const myPictureSlice = createSlice({
  name: 'myPicture',
  initialState: [],
  reducers: {
    getPicture(state, action) {
      return state =[...state, ...action.payload];
      },
    clearPictures(state) {
      return state = []
    },
  },
});

export const { getPicture, clearPictures } = myPictureSlice.actions;