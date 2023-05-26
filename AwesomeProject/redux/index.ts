import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./slices/postSlice";


export const store = configureStore({
    reducer: {
        postSlice: postSlice
    }
})
export type AppDispatch = typeof store.dispatch
export type StateType = ReturnType<typeof store.getState>