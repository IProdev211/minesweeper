import React from 'react';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

import Header from './header';
import { watcherSaga } from '../common/rootsaga';
import { store as appStore } from '../common/store';
import { startGame } from './optionReducers';

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

describe('<Header />', () => {
  it('Buttons should be appeared correctly', () => {
    const store = mockStore(initialState);
    const { getByTestId } = render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    expect(getByTestId('level-beginner')).toBeInTheDocument();
    expect(getByTestId('level-intermediate')).toBeInTheDocument();
    expect(getByTestId('level-expert')).toBeInTheDocument();
    expect(getByTestId('restart')).toBeInTheDocument();
  });
  it('Beginner level should be active if it is selected', () => {
    sagaMiddleware.run(watcherSaga);

    const { getByTestId } = render(
      <Provider store={appStore}>
        <Header />
      </Provider>
    );

    expect(getByTestId('level-beginner')).toBeTruthy();
    appStore.dispatch(startGame(1));
    expect(getByTestId('level-beginner')).toHaveStyle(`background: #6a7173`);
  });
  it('Intermediate level should be active if it is selected', () => {
    sagaMiddleware.run(watcherSaga);

    const { getByTestId } = render(
      <Provider store={appStore}>
        <Header />
      </Provider>
    );

    expect(getByTestId('level-intermediate')).toBeTruthy();
    appStore.dispatch(startGame(2));
    expect(getByTestId('level-intermediate')).toHaveStyle(
      `background: #6a7173`
    );
  });
  it('Expert level should be active if it is selected', () => {
    sagaMiddleware.run(watcherSaga);

    const { getByTestId } = render(
      <Provider store={appStore}>
        <Header />
      </Provider>
    );

    expect(getByTestId('level-expert')).toBeTruthy();
    appStore.dispatch(startGame(3));
    expect(getByTestId('level-expert')).toHaveStyle(`background: #6a7173`);
  });
});
