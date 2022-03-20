import React, { MouseEvent } from 'react';

import { CellProps, TStatus } from './interface';
import * as S from './cell.styles';

const Cell = ({
  testId,
  text,
  disabled,
  isFlag,
  onClick,
  onSetFlag,
}: CellProps) => {
  const status: TStatus =
    text === '□' ? 'default' : text === '*' ? 'failed' : 'success';

  const renderBtnText = () => {
    if (status === 'success') {
      return text === '0' ? null : <span>{text}</span>;
    }
    if (status === 'failed') {
      return '💣';
    }
    if (isFlag) {
      return '🚩';
    }
    return null;
  };

  const handleClickCell = () => {
    if (disabled) return;

    onClick();
  };

  const handleContextMenu = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    onSetFlag();
  };

  return (
    <S.Cell
      data-testid={testId}
      onClick={handleClickCell}
      status={status}
      disabled={disabled}
      onContextMenu={handleContextMenu}
    >
      {renderBtnText()}
    </S.Cell>
  );
};

export default Cell;
