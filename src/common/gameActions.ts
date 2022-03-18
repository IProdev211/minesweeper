import { take, put, call, apply, fork } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import WebSocketClient from './websocketClient';
import { setBoardMap, setStatus } from './gameReducers';

function createSocketChannel(socket: WebSocket) {
  return eventChannel((emit: (input: string | Error) => void) => {
    const handleOnMessage = (event: MessageEvent) => {
      emit(event.data);
    };

    const errorHandler = (errorEvent: any) => {
      emit(new Error(errorEvent.reason || 'Unkown Error'));
    };

    socket.addEventListener('message', handleOnMessage);
    socket.addEventListener('error', errorHandler);

    const unsubscribe = () => {
      socket.removeEventListener('message', handleOnMessage);
    };

    return unsubscribe;
  });
}

function* requestBoardMap(socket: WebSocket) {
  yield apply(socket, socket.send, ['map']);
}

export function* watchOnGame(): any {
  const socket: WebSocket = yield call(WebSocketClient.createConnection);
  const socketChannel = yield call(createSocketChannel, socket);

  while (true) {
    try {
      const data = yield take(socketChannel);
      console.log('data... ', data);
      if (data.includes('map:')) {
        yield put(setBoardMap(data));
      }
      if (data.includes('new:')) {
        yield fork(requestBoardMap, socket);
      }
      if (data.includes('open:')) {
        yield put(setStatus(data.split('open: ')[1]));
        yield fork(requestBoardMap, socket);
      }
    } catch (err) {
      console.error('socket error:', err);
      socketChannel.close();
    }
  }
}
