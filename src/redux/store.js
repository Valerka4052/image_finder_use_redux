import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { myPictureSlice } from './pictures/slice';
import { myPageSlice } from './page/slice';
import { myLargeImageSlice } from './largeImage/slice';
import { myShowModalSlice } from './showModal/slice';
import { mySearchquerrySlice } from './searchquerry/slice';
import { myLoadingSlice } from './loading/slice';
import { myLastPageSlice } from './lastPage/slice';


const rootReducer = combineReducers({
    pictures: myPictureSlice.reducer,
    page: myPageSlice.reducer,
    largeImage: myLargeImageSlice.reducer,
    showModal: myShowModalSlice.reducer,
    searchQuerry: mySearchquerrySlice.reducer,
    loading: myLoadingSlice.reducer,
    lastPage: myLastPageSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer
});

