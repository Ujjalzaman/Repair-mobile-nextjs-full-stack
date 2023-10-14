import { baseApi } from './api/baseApi';
import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './rootReducer';
export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch