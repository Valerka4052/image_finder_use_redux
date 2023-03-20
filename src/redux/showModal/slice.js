import { createSlice } from '@reduxjs/toolkit';

export const myShowModalSlice = createSlice({
  name: 'myShowModal',
  initialState: false,
  reducers: {
    modalShow(state) {
      return state = true;
    },
    modalHide(state) {
      return state = false;
    },
  },
});

export const { modalShow, modalHide } = myShowModalSlice.actions;