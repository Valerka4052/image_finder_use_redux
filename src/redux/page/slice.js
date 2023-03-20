import { createSlice } from '@reduxjs/toolkit';

export const myPageSlice = createSlice({
    name: 'myPage',
    initialState: 1,
    reducers: {
        changePage(state,action) { return state = state + action.payload },
        pageTo1(state) { return state = 1 },
    },
});

export const { changePage, pageTo1 } = myPageSlice.actions;