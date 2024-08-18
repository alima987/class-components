import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface TVData {
    id: string,
    overview: string,
    vote_average: number,
    poster_path: string,
    name: string,
    backdrop_path:string
    }
    export interface TVState {
    tvs: TVData[], 
    AiringToday: TVData[],
    TopRatedTv: TVData[],
  }
  const initialState: TVState = {
    tvs: [],
    AiringToday: [],
    TopRatedTv: []
  }

export const tvSlice = createSlice({
    name: 'tvs',
    initialState,
    reducers: {
     setTV: (state, action: PayloadAction<TVData[]>) => {
       state.tvs = action.payload
     },
     setAiringToday: (state, action: PayloadAction<TVData[]>) => {
      state.AiringToday = action.payload
     },
     setTopRatedTv: (state, action: PayloadAction<TVData[]>) => {
      state.TopRatedTv = action.payload
     }
    }
})
export const { setTV, setAiringToday, setTopRatedTv } = tvSlice.actions
export default tvSlice.reducer