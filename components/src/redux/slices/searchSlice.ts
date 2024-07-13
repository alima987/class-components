import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface SearchData {
    id: string,
    overview: string,
    vote_average: number,
    poster_path: string,
    name: string,
    title: string
    }
    export interface SearchState {
    search: SearchData[]
  }
  const initialState: SearchState = {
    search: []
  }
export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearch: (state, action: PayloadAction<SearchData[]>) => {
           state.search = action.payload
        }
    }
})
export const { setSearch } = searchSlice.actions
export default searchSlice.reducer