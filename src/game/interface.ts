export interface BoardProps {
  boardMap: string[];
}

export interface CellProps {
  key: string;
  text: string;
  onClick: () => void;
}

export type TStatus = 'success' | 'failed' | 'default';
