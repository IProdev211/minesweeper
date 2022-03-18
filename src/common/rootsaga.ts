import { takeLatest } from 'redux-saga/effects';
import { watchOnGame } from './gameActions';
import { handleCreateGame } from '../option/optionActions';
import { handleOpenCell } from '../play/playActions';
import { initialiazeGame } from './gameReducers';
import { startGame } from '../option/optionReducers';
import { openCell } from '../play/playReducers';

export function* watcherSaga() {
  yield takeLatest(initialiazeGame.type, watchOnGame);
  yield takeLatest(startGame.type, handleCreateGame);
  yield takeLatest(openCell.type, handleOpenCell);
}
