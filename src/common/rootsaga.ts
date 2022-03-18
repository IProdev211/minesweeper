import { takeLatest } from 'redux-saga/effects';
import { watchOnGame } from './gameActions';
import { initialiazeGame } from './gameReducers';
import { handleCreateGame } from '../option/optionActions';
import { startGame } from '../option/optionReducers';

export function* watcherSaga() {
  yield takeLatest(initialiazeGame.type, watchOnGame);
  yield takeLatest(startGame.type, handleCreateGame);
}
