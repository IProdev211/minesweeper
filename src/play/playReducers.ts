import { createSlice } from '@reduxjs/toolkit';
import { PlayState, ActionType } from './interface';

const initialState: PlayState = {
  level: 0,
};

const placeSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    openCell() {
      return;
    },
  },
});

export const { openCell } = placeSlice.actions;

export const playReducer = placeSlice.reducer;
