import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { Markdown, keyBoard, markInsert } from '../editor'

type Mark = {
  mark: string
}

const state: Mark = {
  mark: '',
}

const markdownSymbols: Record<string, string> = {
  '/': '[//]:',
  '>': '>',
  '1': '#',
  '2': '##',
  '3': '###',
  '4': '####',
  '5': '#####',
  '6': '######',
  a: '[Текст ссылки](https://www.example.com)',
  b: '**',
  c: '```',
  i: '*',
  l: '1.',
  o: '-',
  p: '![Текст описания](https://www.example.com/image.jpg)',
}

const markSlice = createSlice({
  extraReducers: build => {
    build
      .addCase(markInsert, (state, action: PayloadAction<Markdown>) => {
        state.mark = state.mark + action.payload.md
      })
      .addCase(keyBoard, (state, action: PayloadAction<string>) => {
        const symbol = markdownSymbols[action.payload]

        if (symbol) {
          state.mark += symbol
        }
      })
  },
  initialState: state,
  name: 'mark',
  reducers: {
    changeMark: (state, action: PayloadAction<string>) => {
      state.mark = action.payload
    },
  },
})

export const { changeMark } = markSlice.actions

export default markSlice.reducer
