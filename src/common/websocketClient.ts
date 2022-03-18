export const SOCKET_ENDPOINT = 'wss://hometask.eg1236.com/game1/';

class WebSocketClient {
  private static _socket: WebSocket;

  public static get socket() {
    return this._socket;
  }

  public static set socket(socketConnection: WebSocket) {
    this._socket = socketConnection;
  }

  public static createConnection(url: string = SOCKET_ENDPOINT) {
    if (WebSocketClient.socket) {
      return WebSocketClient.socket;
    }
    const socketConnection = new WebSocket(url);
    WebSocketClient.socket = socketConnection;
    return WebSocketClient.socket;
  }
}

export default WebSocketClient;
