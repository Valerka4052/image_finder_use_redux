import { createSlice } from '@reduxjs/toolkit';

export const mySearchquerrySlice = createSlice({
    name: 'mySearchquerry',
    initialState: '',
    reducers: {
        getSearchquerry(state, action) {
            return state = action.payload
        },
    },
});

export const { getSearchquerry } = mySearchquerrySlice.actions;