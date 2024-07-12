import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface LoadingState {
    isLoading: boolean
}
const initialState: LoadingState = {
    isLoading: false,
}
export const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        setLoding: (state, action:PayloadAction<boolean>) => {
           state.isLoading = action.payload
        }

    }
})
export const { setLoding } = loadingSlice.actions
export default loadingSlice.reducer