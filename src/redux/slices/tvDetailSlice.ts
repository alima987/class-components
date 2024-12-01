import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TVDetailData } from '../../utils/interfaces';

  interface tvDetailState {
    tv: TVDetailData | null,  
    cast: TVDetailData[],        
    review: TVDetailData[]      
  }
  
  const initialState: tvDetailState = {
    tv: null,
    cast: [],
    review: [],
  };
const tvDetailSlice = createSlice({
  name: 'tvDetail',
  initialState,
  reducers: {
    setTvDetail(state, action: PayloadAction<TVDetailData>) {
      state.tv= action.payload;
    },
    setTvCastDetail(state, action: PayloadAction<TVDetailData[]>) {
        state.cast= action.payload;
    },
    setTvReviewDetail(state, action: PayloadAction<TVDetailData[]>) {
        state.review= action.payload;
    },
  },
});

export const { setTvDetail, setTvCastDetail, setTvReviewDetail } = tvDetailSlice.actions;

export default tvDetailSlice.reducer;