import { configureStore } from '@reduxjs/toolkit'

import { clipboardReducer } from '../features/clipboard'
import { editorReducer } from '../features/editor'
import { markReducer } from '../features/mark'

export const store = configureStore({
  reducer: {
    clipboard: clipboardReducer,
    editor: editorReducer,
    mark: markReducer,
  },
})

export type AppStore = typeof store
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
