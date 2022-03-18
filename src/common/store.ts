import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { playReducer } from '../play/playReducers';
import { gameReducer } from '../common/gameReducers';
import { optionReducer } from '../option/optionReducers';
import { watcherSaga } from './rootsaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    game: gameReducer,
    option: optionReducer,
    play: playReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return [
      ...getDefaultMiddleware({
        thunk: false,
      }),
      sagaMiddleware,
    ];
  },
});

sagaMiddleware.run(watcherSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
