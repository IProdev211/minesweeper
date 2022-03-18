import { createSlice } from '@reduxjs/toolkit';
import { OptionState, ActionType } from './interface';

const initialState: OptionState = {
  level: 0,
};

const optionSlice = createSlice({
  name: 'option',
  initialState,
  reducers: {
    startGame(state: OptionState, action: ActionType) {
      state.level = action.payload;
    },
  },
});

export const { startGame } = optionSlice.actions;

export const optionReducer = optionSlice.reducer;
