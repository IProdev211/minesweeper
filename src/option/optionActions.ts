import { apply } from 'redux-saga/effects';

import WebSocketClient from '../common/websocketClient';

export function* handleCreateGame(action: any) {
  yield apply(WebSocketClient.socket, WebSocketClient.socket.send, [
    `new ${action.payload}`,
  ]);
}
