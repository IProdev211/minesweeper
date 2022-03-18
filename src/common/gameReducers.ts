import { createSlice } from '@reduxjs/toolkit';
import { GameState, ActionType } from './interface';

function convertMapPayload(payload: string): string[] {
  const rowList: string[] = payload.split('map:')[1].split('\n');
  return rowList.filter((item: string) => !!item.length);
}

const initialState: GameState = {
  boardMap: [],
  status: -1,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    initialiazeGame() {},
    setBoardMap(state: GameState, action: ActionType) {
      state.boardMap = convertMapPayload(action.payload as string);
    },
    refreshGame(state: GameState) {
      state.status = -1;
    },
    setStatus(state: GameState, action: ActionType) {
      const status = action.payload as string;
      state.status =
        status === '' || status === 'OK' ? -1 : status === 'You lose' ? 0 : 1;
    },
  },
});

export const {
  initialiazeGame,
  setBoardMap,
  setStatus,
  refreshGame,
} = gameSlice.actions;

export const gameReducer = gameSlice.reducer;
