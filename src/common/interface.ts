export interface GameState {
  boardMap: string[];
  status: number; // 0: lose, 1: win, -1: default
}

export interface ActionType {
  payload: string | number;
}
