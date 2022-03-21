import { createSlice } from '@reduxjs/toolkit';
import { PlayState, ActionType } from './interface';

const initialState: PlayState = {
  flags: [],
};

const placeSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    openCell(state: PlayState, action: ActionType) {
      return;
    },
    setFlag(state: PlayState, action: ActionType) {
      const { row, col } = action.payload;
      const index = state.flags.findIndex(
        (flag: Array<number>) => flag[0] === row && flag[1] === col
      );
      if (index !== -1) {
        state.flags.splice(index, 1);
      } else {
        state.flags.push([row, col]);
      }
    },
    clearFlags(state: PlayState) {
      state.flags = [];
    },
  },
});

export const { openCell, setFlag, clearFlags } = placeSlice.actions;

export const playReducer = placeSlice.reducer;
