import { configureStore } from "@reduxjs/toolkit";
import editorReducer from '../features/editor/editorSlice'
import markReducer from '../features/mark/markSlice'

export const store = configureStore({
    reducer: {
        mark: markReducer,
        editor:  editorReducer,
    }
})

export type AppStore = typeof store
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>