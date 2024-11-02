import { configureStore } from "@reduxjs/toolkit";
import {editorReducer} from '../features/editor'
import {markReducer} from '../features/mark'
import {clipboardReducer} from '../features/clipboard'

export const store = configureStore({
    reducer: {
        mark: markReducer,
        editor:  editorReducer,
        clipboard: clipboardReducer
    }
})

export type AppStore = typeof store
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>