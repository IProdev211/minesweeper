import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';

import Cell from './cell';
import { openCell, setFlag } from './playReducers';
import { RootState } from '../common/store';

const Board = () => {
  const dispatch = useDispatch();
  const { status, boardMap } = useSelector((state: RootState) => state.game);
  const { flags } = useSelector((state: RootState) => state.play);

  const handleClickCell = (row: number, col: number) => {
    dispatch(openCell({ row, col }));
  };

  const handleSetFlag = (row: number, col: number) => {
    dispatch(setFlag({ row, col }));
  };

  const renderBoardMap = (rows: string[]) => {
    return rows.map((row: string, _rowIndex: number) => {
      const cells = row.split('');
      const renderRow = cells.map((cell: string, _colIndex: number) => {
        const isFlag = flags.find(
          (flag: Array<number>) =>
            flag[0] === _rowIndex && flag[1] === _colIndex
        );
        return (
          <Cell
            key={`cell-${_rowIndex}-${_colIndex}`}
            text={cell}
            disabled={status !== -1}
            isFlag={!!isFlag}
            onClick={() => handleClickCell(_rowIndex, _colIndex)}
            onSetFlag={() => handleSetFlag(_rowIndex, _colIndex)}
          />
        );
      });
      return (
        <Box display='flex' key={`row-${_rowIndex}`}>
          {renderRow}
        </Box>
      );
    });
  };

  if (!boardMap.length) {
    return (
      <Typography variant='h5' mt={3}>
        Select the level...
      </Typography>
    );
  }

  return <>{renderBoardMap(boardMap)}</>;
};

export default Board;
