import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import * as S from './header.styles';
import { RootState } from '../common/store';
import { useSelector, useDispatch } from 'react-redux';
import { startGame } from './optionReducers';
import { initialiazeGame, refreshGame } from '../common/gameReducers';
import { clearFlags } from '../play/playReducers';

const Header = () => {
  const dispatch = useDispatch();
  const optionState = useSelector((state: RootState) => state.option);

  useEffect(() => {
    dispatch(initialiazeGame());
  }, [dispatch]);

  const handleLevel = (level: number) => {
    if (level === optionState.level) return;
    dispatch(startGame(level));
    dispatch(refreshGame());
    dispatch(clearFlags());
  };

  const handleRefresh = () => {
    dispatch(startGame(optionState.level));
    dispatch(refreshGame());
    dispatch(clearFlags());
  };

  return (
    <Box display='flex' flexDirection='column'>
      <Typography variant='h4' textAlign='center'>
        💣 MINESWEEPER
      </Typography>
      <S.HeaderContainer display='flex' justifyContent='space-between'>
        <Box>
          <S.LevelButton
            variant='contained'
            data-testid='level-beginner'
            selected={optionState.level === 1}
            onClick={() => handleLevel(1)}
          >
            Beginner
          </S.LevelButton>
          <S.LevelButton
            variant='contained'
            data-testid='level-intermediate'
            selected={optionState.level === 2}
            onClick={() => handleLevel(2)}
          >
            Intermediate
          </S.LevelButton>
          <S.LevelButton
            variant='contained'
            data-testid='level-expert'
            selected={optionState.level === 3}
            onClick={() => handleLevel(3)}
          >
            Expert
          </S.LevelButton>
        </Box>
        <S.RefreshButton
          variant='outlined'
          data-testid='restart'
          onClick={() => handleRefresh()}
        >
          Restart
        </S.RefreshButton>
      </S.HeaderContainer>
    </Box>
  );
};

export default Header;
