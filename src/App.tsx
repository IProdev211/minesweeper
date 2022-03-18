import React from 'react';

import Board from './game/board';
import Header from './common/header';
import * as S from './App.styles';

function App() {
  return (
    <S.AppContainer>
      <Header />
      <Board
        boardMap={[
          '□□□□□□□□*□',
          '□□□1001□□□',
          '□□□□224□□□',
          '□□□□□□□□□□',
          '□□□□□□□□□□',
          '□□□□□□□□□□',
          '□□□□□□□□□□',
          '□□□□□□□□□□',
          '□□□□□□□□□□',
          '□□□□□□□□□□',
        ]}
      />
    </S.AppContainer>
  );
}

export default App;
