import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Markdown, titleAdded } from "../editor"

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
            .addCase(titleAdded, (state, action: PayloadAction<Markdown>) => {
                state.mark = state.mark + action.payload.md
            })
    }
})

export const {changeMark} = markSlice.actions

export default markSlice.reducer