import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
    h1: string
    h2: string
    h3: string
    h4: string
    h5: string
    h6: string
}
const state:  State = {
    h1: '#',
    h2: '##',
    h3: '###',
    h4: '####',
    h5: '#####',
    h6: '######',
}

export type Edit = {
    h1: string
}


const editorSlice = createSlice({
    name: "editor",
    initialState: state,
    reducers: {
        titleAdded(state, action: PayloadAction<Edit>){
            state.h1 = action.payload.h1
        }
    }
})

export const { titleAdded } =  editorSlice.actions


export default editorSlice.reducer