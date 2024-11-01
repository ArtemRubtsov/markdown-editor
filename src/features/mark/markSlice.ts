import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { keyBoard, Markdown, markInsert } from "../editor"

type Mark = {
    mark: string
}

const state: Mark = {
    mark: ''
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
                if(action.payload === '1'){
                    state.mark += '#'
                }
                if(action.payload === '2'){
                    state.mark += '##'
                }
                if(action.payload === '3'){
                    state.mark += '###'
                }
                if(action.payload === '4'){
                    state.mark += '####'
                }
                if(action.payload === '5'){
                    state.mark += '#####'
                }
                if(action.payload === '6'){
                    state.mark += '######'
                }
                if(action.payload === 'b'){
                    state.mark += '**'
                }
                if(action.payload === 'i'){
                    state.mark += '*'
                }
                if(action.payload === '>'){
                    state.mark += '>'
                }
                if(action.payload === 'l'){
                    state.mark += '1.'
                }
                if(action.payload === 'o'){
                    state.mark += '-'
                }
                if(action.payload === 'c'){
                    state.mark += '```'
                }
                if(action.payload === 'p'){
                    state.mark += '![Текст описания](https://www.example.com/image.jpg)'
                }
                if(action.payload === 'a'){
                    state.mark += '[Текст ссылки](https://www.example.com)'
                }
                if(action.payload === '/'){
                    state.mark += '[//]:'
                }
            })
    }
})

export const {changeMark} = markSlice.actions

export default markSlice.reducer