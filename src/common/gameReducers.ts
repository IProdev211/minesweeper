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
    initialiazeGame() {
      return;
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

export const { initialiazeGame, setBoardMap, setStatus } = gameSlice.actions;

export const gameReducer = gameSlice.reducer;
