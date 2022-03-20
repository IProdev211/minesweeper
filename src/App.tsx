import React from 'react';

import Board from './play/board';
import * as S from './App.styles';
import Header from './option/header';
import { RootState } from './common/store';
import { useSelector } from 'react-redux';

function App() {
  const { status } = useSelector((state: RootState) => state.game);

  const message = status === 0 ? 'Game Over!' : status === 1 ? 'You Win!' : '';

  return (
    <S.AppContainer>
      <Header />
      <S.BoardContainer>
        <S.Message status={status} data-testid='game-status'>
          {message}
        </S.Message>
        <Board />
      </S.BoardContainer>
    </S.AppContainer>
  );
}

export default App;
