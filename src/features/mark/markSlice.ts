import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { keyBoard, Markdown, markInsert } from "../editor"

type Mark = {
    mark: string
}

const state: Mark = {
    mark: ''
}

const markdownSymbols: Record<string, string> = {
    '1': '#',
    '2': '##',
    '3': '###',
    '4': '####',
    '5': '#####',
    '6': '######',
    'b': '**',
    'i': '*',
    '>': '>',
    'l': '1.',
    'o': '-',
    'c': '```',
    'p': '![Текст описания](https://www.example.com/image.jpg)',
    'a': '[Текст ссылки](https://www.example.com)',
    '/': '[//]:'
}

const markSlice = createSlice({
    name: 'mark',
    initialState: state,
    reducers: {
        changeMark: (state, action: PayloadAction<string>) => {
            state.mark = action.payload
        }
    },
    extraReducers: build => {
        build
            .addCase(markInsert, (state, action: PayloadAction<Markdown>) => {
                state.mark = state.mark + action.payload.md
            })
            .addCase(keyBoard,  (state, action: PayloadAction<string>) => {
                const symbol = markdownSymbols[action.payload];
                if (symbol) {
                    state.mark += symbol;
                }
            })
    }
})

export const {changeMark} = markSlice.actions

export default markSlice.reducer