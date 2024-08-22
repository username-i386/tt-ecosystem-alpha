import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { spaceApiSlice } from './slices/space-api';
import articlesReducer from './slices/articles-slice';

const rootReducer = combineReducers({
    articlesReducer: articlesReducer,
    [spaceApiSlice.reducerPath]: spaceApiSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleweare =>
        getDefaultMiddleweare().concat(spaceApiSlice.middleware),
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
