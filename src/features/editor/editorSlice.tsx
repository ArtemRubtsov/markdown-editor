import { createSlice } from "@reduxjs/toolkit";

type State = {
    h1: string
    h2: string
    h3: string
    h4: string
    h5: string
    h6: string
}
const state:  State = {
    h1: '',
    h2: '',
    h3: '',
    h4: '',
    h5: '',
    h6: '',
}



const editorSlice = createSlice({
    name: "editor",
    initialState: state,
    reducers: {}
})

export default editorSlice.reducer