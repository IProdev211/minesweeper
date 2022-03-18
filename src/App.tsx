import React from 'react';

import Board from './play/board';
import * as S from './App.styles';
import Header from './option/header';

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
