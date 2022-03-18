export type TStatus = 'success' | 'failed' | 'default';

export interface BoardProps {
  boardMap: string[];
}

export interface CellProps {
  key: string;
  text: string;
  onClick: () => void;
}

export interface GameState {
  level: number;
  boardMap: string[];
  status: number; // 0: lose, 1: win, -1: default
}

export interface ActionType {
  payload: string | number;
}
