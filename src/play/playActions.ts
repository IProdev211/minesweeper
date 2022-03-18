import { apply } from 'redux-saga/effects';
import WebSocketClient from '../common/websocketClient';

export function* handleOpenCell(action: any) {
  yield apply(WebSocketClient.socket, WebSocketClient.socket.send, [
    action.payload,
  ]);
}
