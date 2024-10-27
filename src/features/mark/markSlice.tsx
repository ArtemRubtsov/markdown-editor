import { createSlice, PayloadAction } from "@reduxjs/toolkit"

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
    }
})

export const {changeMark} = markSlice.actions

export default markSlice.reducer