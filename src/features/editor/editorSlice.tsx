import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type State = {
    markdown: {
        md:  string
    } 
}

export type Markdown = typeof state.markdown

const state:  State = {
    markdown: {
        md: ''
    }
}

const editorSlice = createSlice({
    name: "editor",
    initialState: state,
    reducers: {
        markInsert(state, action: PayloadAction<Markdown>){
             state.markdown = action.payload
        },
        keyBoard(state, action: PayloadAction<string>){
            state.markdown.md += action.payload
        }
    }
})

export const { markInsert, keyBoard } =  editorSlice.actions


export default editorSlice.reducer