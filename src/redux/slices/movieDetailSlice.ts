import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DetailData } from '../../utils/interfaces';

  interface MovieDetailState {
    movie: DetailData | null,  
    cast: DetailData[],        
    review: DetailData[]      
  }
  
  const initialState: MovieDetailState = {
    movie: null,
    cast: [],
    review: [],
  };
const movieDetailSlice = createSlice({
  name: 'movieDetail',
  initialState,
  reducers: {
    setMovieDetail(state, action: PayloadAction<DetailData>) {
      state.movie= action.payload;
    },
    setCastDetail(state, action: PayloadAction<DetailData[]>) {
        state.cast= action.payload;
    },
    setReviewDetail(state, action: PayloadAction<DetailData[]>) {
        state.review= action.payload;
    },
  },
});

export const { setMovieDetail, setCastDetail, setReviewDetail } = movieDetailSlice.actions;

export default movieDetailSlice.reducer;

