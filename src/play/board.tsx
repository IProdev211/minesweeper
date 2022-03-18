import React from 'react';
import { BoardProps } from './interface';
import Cell from './cell';
import { Box } from '@mui/material';

const Board = ({ boardMap }: BoardProps) => {
  const handleClickCell = (row: number, col: number) => {
    console.log(row, col);
  };

  const renderBoardMap = (rows: string[]) => {
    return rows.map((row: string, _rowIndex: number) => {
      const cells = row.split('');
      const renderRow = cells.map((cell: string, _colIndex: number) => (
        <Cell
          key={`cell-${_rowIndex}-${_colIndex}`}
          text={cell}
          onClick={() => handleClickCell(_rowIndex, _colIndex)}
        />
      ));
      return (
        <Box display='flex' key={`row-${_rowIndex}`}>
          {renderRow}
        </Box>
      );
    });
  };

  return <Box>{renderBoardMap(boardMap)}</Box>;
};

export default Board;
