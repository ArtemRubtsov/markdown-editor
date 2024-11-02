import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type State = {
  markdown: {
    md: string
  }
}

export type Markdown = typeof state.markdown

const state: State = {
  markdown: {
    md: '',
  },
}

const editorSlice = createSlice({
  initialState: state,
  name: 'editor',
  reducers: {
    keyBoard(state, action: PayloadAction<string>) {
      state.markdown.md += action.payload
    },
    markInsert(state, action: PayloadAction<Markdown>) {
      state.markdown = action.payload
    },
  },
})

export const { keyBoard, markInsert } = editorSlice.actions

export default editorSlice.reducer
