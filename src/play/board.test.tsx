import React from 'react';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import Board from './board';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);
const initialState = {
  game: {
    boardMap: [
      '1□□□□□□□□□',
      '□□□□□□□□□□',
      '□□□□□□□□□□',
      '□□□□□□□□□□',
      '□□□□□□□□□□',
      '□□□□□□□□□□',
      '□□□□□□□□□□',
      '□□□□□□□□□□',
      '□□□□□□□□□□',
      '□□□□□□□□□□',
    ],
  },
  option: {
    level: 1,
  },
  play: {
    flags: [],
  },
};

describe('<Board />', () => {
  it('Board should be rendered correctly with correct cell', () => {
    const store = mockStore(initialState);
    const { getByTestId } = render(
      <Provider store={store}>
        <Board />
      </Provider>
    );

    expect(getByTestId('cell-0-0')).toHaveTextContent('1');
  });
  it('Cell should be rendered correctly with □', () => {
    const store = mockStore(initialState);
    const { getByTestId } = render(
      <Provider store={store}>
        <Board />
      </Provider>
    );

    expect(getByTestId('cell-0-0')).toHaveTextContent('1');
  });
});
