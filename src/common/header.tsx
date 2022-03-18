import React from 'react';
import { Box, Typography } from '@mui/material';
import * as S from './header.styles';

const Header = () => {
  return (
    <Box display='flex' flexDirection='column'>
      <Typography variant='h4' textAlign='center'>
        💣 MINESWEEPER
      </Typography>
      <S.HeaderContainer display='flex' justifyContent='space-between'>
        <Box>
          <S.LevelButton variant='contained'>Beginner</S.LevelButton>
          <S.LevelButton variant='contained'>Intermediate</S.LevelButton>
          <S.LevelButton variant='contained'>Expert</S.LevelButton>
        </Box>
        <S.RefreshButton variant='outlined'>Refresh</S.RefreshButton>
      </S.HeaderContainer>
    </Box>
  );
};

export default Header;
