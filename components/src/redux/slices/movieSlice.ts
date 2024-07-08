import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface MovieData {
    id: string,
    overview: string,
    vote_average: number,
    poster_path: string,
    title: string,
    }
export interface MovieState {
    data: MovieData[],
    loading: false | true,
    error: '' 
}
const initialState: MovieState = {
    data: [],
    loading: false,
    error: ''
}

const fetchMovies = createAsyncThunk('movies', async() => {
    const resp = await axios.get('')
    return resp.data
})
const updatedData = (state: MovieState, action: PayloadAction<MovieData>) => {
    const index = state.data.findIndex(movie => movie.id === action.payload.id)
    if(index >= 0) {
        state.data[index] = action.payload
    }
    state.data.push(action.payload)
   }
export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
      setNowPlaying: (state, action: PayloadAction<MovieData>) => {
       updatedData(state, action)
      },
      setPopular: (state, action: PayloadAction<MovieData>) => {
        updatedData(state, action)
      },
      setTopRated: (state, action: PayloadAction<MovieData>) => {
        updatedData(state, action)
      },
      setUpcoming: (state, action: PayloadAction<MovieData>) => {
        updatedData(state, action)
      }
    }, 
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.pending, (state) => {
         state.loading = true
        })
       builder.addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
       })
       builder.addCase(fetchMovies.rejected, (state, action) => {
         state.loading = false
         state.error = state.error.
       })
    }
})
export const {setNowPlaying, setPopular, setTopRated, setUpcoming} = movieSlice.actions
export default movieSlice.reducer