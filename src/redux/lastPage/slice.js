import { createSlice } from '@reduxjs/toolkit';

export const myLastPageSlice = createSlice({
  name: 'myLastPage',
  initialState: false,
  reducers: {
      lastPageTrue(state) { return state = true },
      lastPageFalse(state) { return state = false },
  }
});

export const { lastPageTrue, lastPageFalse } = myLastPageSlice.actions;