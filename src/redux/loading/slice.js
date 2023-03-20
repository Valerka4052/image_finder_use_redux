import { createSlice } from '@reduxjs/toolkit';

export const myLoadingSlice = createSlice({
  name: 'myLoading',
  initialState: false,
  reducers: {
      loadingTrue(state) { return state = true },
      loadingFalse(state) { return state = false },
  },
});

export const { loadingTrue, loadingFalse } = myLoadingSlice.actions;