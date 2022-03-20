import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import configureStore from 'redux-mock-store';

import App from './App';
import { watcherSaga } from './common/rootsaga';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

const initialState = {
  game: {
    boardMap: [],
  },
  option: {
    level: 0,
  },
  play: {
    flags: [],
  },
};

describe('<App />', () => {
  it('rendered', () => {
    const store = mockStore(initialState);
    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it('Select the level - text should be appeared', () => {
    const store = mockStore(initialState);
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(getByTestId('level-beginner')).toBeInTheDocument();
    expect(getByText('Select the level...')).toBeInTheDocument();
  });
  it('Board should be appeared after selecting the level', async () => {
    sagaMiddleware.run(watcherSaga);
    const store = mockStore({
      ...initialState,
      game: {
        boardMap: [
          '□□□□□□□□□□',
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
    });

    const { getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(getByTestId('board')).toBeInTheDocument();
  });
  it('Game state should be appeared correctly when game over', async () => {
    sagaMiddleware.run(watcherSaga);
    const store = mockStore({
      ...initialState,
      game: {
        boardMap: [
          '□□□□□□□□□□',
          '□□□□□□□□□□',
          '□□□□□□□□□□',
          '□□□□□□□□□□',
          '□□□□□□□□□□',
          '□□□□□*□□□□',
          '□□□□□□□□□□',
          '□□□□□□□□□□',
          '□□□□□□□□□□',
          '□□□□□□□□□□',
        ],
        status: 0,
      },
    });

    const { getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(getByTestId('game-status')).toHaveTextContent('Game Over!');
  });
  it('Game state should be appeared correctly with win', async () => {
    sagaMiddleware.run(watcherSaga);
    const store = mockStore({
      ...initialState,
      game: {
        boardMap: [
          '12121212',
          '12121212',
          '12121212',
          '12121212',
          '12121212',
          '12121212',
          '12121212',
          '12121212',
          '12121212',
          '12121212',
        ],
        status: 1,
      },
    });

    const { getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(getByTestId('game-status')).toHaveTextContent('You Win!');
  });
});
