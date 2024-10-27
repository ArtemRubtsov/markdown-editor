import { configureStore } from "@reduxjs/toolkit";
import editorReducer from '../features/editor/editorSlice'

export const store = configureStore({
    reducer: {
        editor:  editorReducer,

    }
})

export type AppStore = typeof store
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>