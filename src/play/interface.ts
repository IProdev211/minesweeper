export type TStatus = 'success' | 'failed' | 'default';

export interface BoardProps {
  boardMap: string[];
}

export interface CellProps {
  key: string;
  text: string;
  onClick: () => void;
}

export interface PlayState {
  level: number;
}

export interface ActionType {
  payload: Record<string, number>;
}
