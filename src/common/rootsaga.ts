import { takeLatest } from 'redux-saga/effects';
import { watchOnGame, handleCreateGame } from '../game/gameActions';
import { startGame, initialiazeGame } from '../game/gameReducers';

export function* watcherSaga() {
  yield takeLatest(initialiazeGame.type, watchOnGame);
  yield takeLatest(startGame.type, handleCreateGame);
}
