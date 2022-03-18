import { createSlice } from '@reduxjs/toolkit';
import { GameState, ActionType } from './interface';

function convertMapPayload(payload: string): string[] {
  const rowList: string[] = payload.split('map:')[1].split('\n');
  return rowList.filter((item: string) => !!item.length);
}

const initialState: GameState = {
  level: 0,
  boardMap: [],
  status: -1,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    initialiazeGame() {},
    startGame(state: GameState, action: ActionType) {
      state.level = action.payload as number;
    },
    setBoardMap(state: GameState, action: ActionType) {
      state.boardMap = convertMapPayload(action.payload as string);
    },
    setStatus(state: GameState, action: ActionType) {
      const status = action.payload as string;
      state.status = status === '' ? -1 : status === 'OK' ? 1 : 0;
    },
  },
});

export const {
  initialiazeGame,
  setBoardMap,
  startGame,
  setStatus,
} = gameSlice.actions;

export const gameReducer = gameSlice.reducer;
