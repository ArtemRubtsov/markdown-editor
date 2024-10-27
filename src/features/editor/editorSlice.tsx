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
        titleAdded(state, action: PayloadAction<Markdown>){
             state.markdown = action.payload
        }
    }
})

export const { titleAdded } =  editorSlice.actions


export default editorSlice.reducer