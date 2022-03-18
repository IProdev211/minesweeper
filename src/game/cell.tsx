import React from 'react';
import FlagIcon from '@mui/icons-material/Flag';

import { CellProps, TStatus } from './interface';
import * as S from './cell.styles';

const Cell = ({ key, text, onClick }: CellProps) => {
  const status: TStatus =
    text === '□' ? 'default' : text === '*' ? 'failed' : 'success';
  console.log(status);

  const renderBtnText = (status: TStatus, text: string) => {
    if (status === 'success') {
      return text === '0' ? null : <span>{text}</span>;
    }

    if (status === 'failed') {
      return '💣';
    }

    return null;
  };

  return (
    <S.Cell
      key={key}
      onClick={() => onClick()}
      data-testid={key}
      status={status}
    >
      {renderBtnText(status, text)}
    </S.Cell>
  );
};

export default Cell;
