import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface TVData {
    id: string,
    overview: string,
    vote_average: number,
    poster_path: string,
    name: string,
    }
    export interface TVState {
    tvs: TVData[], 
  }
  const initialState: TVState = {
    tvs: [],
  }

export const tvSlice = createSlice({
    name: 'tvs',
    initialState,
    reducers: {
     setTV: (state, action: PayloadAction<TVData[]>) => {
       state.tvs = action.payload
     }
    }
})
export const { setTV } = tvSlice.actions
export default tvSlice.reducer