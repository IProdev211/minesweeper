export type TStatus = 'success' | 'failed' | 'default';

export interface CellProps {
  key: string;
  text: string;
  disabled: boolean;
  isFlag: boolean;
  onClick: () => void;
  onSetFlag: () => void;
}

export interface PlayState {
  flags: Array<Array<number>>;
}

export interface ActionType {
  payload: Record<string, number>;
}
