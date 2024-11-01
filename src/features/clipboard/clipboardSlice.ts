import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type State = {
    copy: boolean
}

const initialState: State = {
    copy: true
}

const clipboardSlice = createSlice({
    name: 'cliboard',
    initialState,
    reducers: {
        setCopy(state, action: PayloadAction<boolean>){
            state.copy = action.payload
        }
    }
})

export const {  setCopy } = clipboardSlice.actions
export default clipboardSlice.reducer
