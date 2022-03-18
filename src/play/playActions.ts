import { apply } from 'redux-saga/effects';
import WebSocketClient from '../common/websocketClient';

export function* handleOpenCell(action: any) {
  const { row, col } = action.payload;
  yield apply(WebSocketClient.socket, WebSocketClient.socket.send, [
    `open ${col} ${row}`,
  ]);
}
